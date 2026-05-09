import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import React, {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Images } from './assets/images';
import { Ionicons } from '@expo/vector-icons';
import { AboutApp } from './components/AboutApp';
const storageKey = 'setAndSong';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PerformanceEvent, LocaterState, CurrentState } from './data/types';
import getPerformanceEvent from './data/events';
import { ArtistInfo } from './components/Artist';
import { VenueInfo } from './components/Venue';

const performanceEvent = getPerformanceEvent("houseConcert3");

// Since this is async, wrap it in a function
const loadSettings = async () => {
  try {
    // 1. Use getItem with await
    let storedSetAndSongString = await AsyncStorage.getItem(storageKey);

    if (storedSetAndSongString) {
      let storedSetAndSong = JSON.parse(storedSetAndSongString);

      // 2. Update your state/locater here
      const defaultLocater = { event: performanceEvent, ...storedSetAndSong };
      return defaultLocater;
    }
  } catch (e) {
    console.error("Failed to load settings", e);
  }
};


export default function App() {
  return (
    <SafeAreaProvider>
      <MainScreen />
    </SafeAreaProvider>
  );
}


function MainScreen() {
  const [showAppInfo, setShowAppInfo] = useState(false);
  const [showArtistInfo, setShowArtistInfo] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [showSongDetails, setShowSongDetails] = useState(false);
  const storageKey = 'setAndSong';
  const defaultLocater: LocaterState = { performanceEvent: performanceEvent, setNumber: 0, songNumber: 0 };
  const [locater, setLocater] = useState(defaultLocater);

  useEffect(() => {
    const initializeData = async () => {
      const storedData = await AsyncStorage.getItem(storageKey);
      if (storedData) {
        const parsed = JSON.parse(storedData);
        setLocater(prev => ({ ...prev, ...parsed }));
      }
    };

    initializeData();
  }, []);
  // should the above be...
  // }, [locater]); // This would cause an infinite loop, so we should leave the dependency array empty to run only on mount.

  /* manage the app's data state */
  function getCurrent(locater: LocaterState) {
    let currentSet = locater.performanceEvent.sets[locater.setNumber];
    let currentSong = currentSet.songs[locater.songNumber];
    let position = (locater.songNumber + 1) + "/" + currentSet.songs.length;
    return { "event": locater.performanceEvent, "songSet": currentSet, "song": currentSong, "position": position };
  }

  function getIsFirst() {
    if (locater.setNumber === 0 && locater.songNumber === 0) {
      return true;
    } else {
      return false;
    }
  }

  function getIsLast() {
    let lastSetIdx = locater.performanceEvent.sets.length - 1;
    let lastSongIdx = performanceEvent.sets[lastSetIdx].songs.length - 1;
    if (locater.setNumber === lastSetIdx && locater.songNumber === lastSongIdx) {
      return true;
    } else {
      return false;
    }
  }

  let current = getCurrent(locater);
  let isFirst = getIsFirst();
  let isLast = getIsLast();

  function onNext() {
    /* locater = {event:event, setNumber:0, songNumber:0}
       current = {"event":locater.event, "songSet": currentSet, "song": currentSong}; */
    let songCountForSet = current.songSet.songs.length;
    let newSongNumber = locater.songNumber + 1;

    if (newSongNumber < songCountForSet) {
      setLocater({ performanceEvent: locater.performanceEvent, setNumber: locater.setNumber, songNumber: newSongNumber });
      return;
    }
    let newSetNumber = locater.setNumber + 1;
    if (newSetNumber < locater.performanceEvent.sets.length) {
      setLocater({ performanceEvent: locater.performanceEvent, setNumber: newSetNumber, songNumber: 0 });
      return;
    }
  }

  function onPrevious() {
    /* locater = {event:event, setNumber:0, songNumber:0}
       current = {"event":locater.event, "songSet": currentSet, "song": currentSong}; */
    let newSongNumber = locater.songNumber - 1;

    if (newSongNumber >= 0) {
      setLocater({ performanceEvent: locater.performanceEvent, setNumber: locater.setNumber, songNumber: newSongNumber });
      return;
    }
    let newSetNumber = locater.setNumber - 1;
    if (newSetNumber >= 0) {
      let newSongNumber = locater.performanceEvent.sets[newSetNumber].songs.length
      setLocater({ performanceEvent: locater.performanceEvent, setNumber: newSetNumber, songNumber: (newSongNumber - 1) });
      return;
    }
  }

  /* manage UI state - for the collapsible sections, 
    we want to ensure that only one can be open at a time, 
    so we will close the others when one is toggled */
  const toggleSongDetails = () => {
    setShowSongDetails(!showSongDetails);
    setShowArtistInfo(false);
    setShowAppInfo(false);
    setShowEventDetails(false);
  };

  const toggleEventDetails = () => {
    setShowEventDetails(!showEventDetails);
    setShowArtistInfo(false);
    setShowAppInfo(false);
    setShowSongDetails(false);
  };

  { /* This function now also closes other open sections */ }
  const toggleAppInfo = () => {
    setShowAppInfo(!showAppInfo);
    setShowArtistInfo(false);
    setShowEventDetails(false);
    setShowSongDetails(false);
  };

  const toggleArtistInfo = () => {
    setShowArtistInfo(!showArtistInfo);
    setShowAppInfo(false);
    setShowEventDetails(false);
    setShowSongDetails(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Top Navigation Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.menuButton}
          accessibilityLabel="Main Menu Button"
          onPress={toggleAppInfo}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          accessibilityLabel="Artist Info Button"
          onPress={toggleArtistInfo}
        >
          <Text style={styles.artistName}>Artist - Fname Lname</Text>
        </TouchableOpacity>
      </View>

      {/* AppInfo Area */}
      {showAppInfo && (
        <AboutApp
          show={true}
          closeMenu={() => toggleAppInfo()} />
      )}

      {/* Artist Info Area */}
      {showArtistInfo && (
        <ArtistInfo
          artist={current.event.artist}
          closeSection={() => toggleArtistInfo()} />
      )}

      {/* 2. Event Info Header */}
      <View style={styles.eventContainer}>
        <TouchableOpacity
          style={styles.controlButton}
          accessibilityLabel="Toggle Event Details"
          onPress={toggleEventDetails}
        >
          <Ionicons
            name={showEventDetails ? "caret-down" : "caret-forward"}
            size={20}
            color="#1e1e1e"
          />
        </TouchableOpacity>

        <Text style={styles.eventInfoText}>Event Name @ Location</Text>

        <Image
          source={Images.turtlelogo}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* New Collapsible Event Details Area */}
      {showEventDetails && (
        <View>
          <VenueInfo 
            venue={current.event.venue} 
            closeVenueInfo={() => toggleEventDetails()} />

          <View style={styles.eventDetailsArea}>
            <Text style={styles.eventDetailsText}>
              This is where additional event information will go.
            </Text>
            <Text style={styles.eventDetailsText}>
              For example, date, time, venue address, special notes, etc.
            </Text>
            <Text style={styles.eventDetailsText}>
              It expands and collapses with the caret icon.
            </Text>
          </View>
        </View>
      )}

      {/* 3. Song Controls / Selection Header */}
      <View style={styles.songSelectHeader}>
        <View style={styles.songInfoRow}>
          <TouchableOpacity
            style={styles.controlButton}
            accessibilityLabel="Toggle Song Details"
            onPress={toggleSongDetails}
          >
            <Ionicons
              name={showSongDetails ? "caret-down" : "caret-forward"}
              size={20}
              color="#1e1e1e"
            />
          </TouchableOpacity>
          <Text style={styles.songTitle}>Song Title</Text>
          <Text style={styles.songPosition}>(a/b)</Text>
        </View>
        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.controlButton} accessibilityLabel="Previous Song">
            <Ionicons name="caret-back" size={20} color="#1e1e1e" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} accessibilityLabel="Next Song">
            <Ionicons name="caret-forward" size={20} color="#1e1e1e" />
          </TouchableOpacity>
          <View style={styles.languageToggles}>
            <TouchableOpacity style={styles.langButton} accessibilityLabel="English Language Selector">
              <SvgUri width="24" height="24" uri={Images.usaFlag} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.langButton} accessibilityLabel="German Language Selector">
              <SvgUri width="24" height="24" uri={Images.germanyFlag} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* New Collapsible Song Details Area */}
      {showSongDetails && (
        <View style={styles.songDetailsArea}>
          <Text style={styles.songDetailsText}>
            This section can display more details about the current song.
          </Text>
          <Text style={styles.songDetailsText}>
            For example, composer, album, year, duration, etc.
          </Text>
          <Text style={styles.songDetailsText}>
            It expands and collapses with the caret icon in the song info row.
          </Text>
        </View>
      )}

      {/* 4. Lyrics View */}
      <ScrollView style={styles.lyricsContainer} contentContainerStyle={styles.lyricsContent}>
        <Text style={styles.lyricsText}>
          Life has very simple plans{"\n"}
          for such an ordinary man{"\n"}
          day by day it fades away{"\n"}
          anything better, is out of his hands{"\n\n"}
          What’cha gonna do, What’cha gonna do today{"\n"}
          What are you gonna do{"\n"}
          What’cha gonna do, What’cha gonna do today{"\n"}
          What are you gonna do{"\n\n"}
          She gave her heart away{"\n"}
          And tried her best to make him see{"\n"}
          But today she held her breath{"\n"}
          And declared at last that she was free
        </Text>
      </ScrollView>

      {/* 5. Footer */}
      <>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© Copyright and Footer Info</Text>
        </View>
        <View>
          <StatusBar style="dark" />
        </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#52a9ce',
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
  },
  artistName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  songDetailsArea: {
    backgroundColor: '#e6f7ff', // A light blue background for song details
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b3e0ff', // A slightly darker blue border
    marginBottom: 10,
  },
  songDetailsText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  eventDetailsArea: {
    backgroundColor: '#fffbe6', // A light yellow background for event details
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffe0b2', // A slightly darker yellow border
    marginBottom: 10,
  },
  eventDetailsText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  expandedArea: {
    backgroundColor: '#f0f8ff', // Light blue background for the expanded area
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d0ebff',
    marginBottom: 10,
    // Initial square shape, will expand vertically with content
    minHeight: 100,
    justifyContent: 'space-between',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    padding: 5,
    zIndex: 1, // Ensure the button is clickable
  },
  closeIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  eventContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',    // Centers vertically
    justifyContent: 'flex-start',
    backgroundColor: '#e4c82a',
    gap: 8
  },
  bannerImage: { // This style is currently using a hardcoded width/height of 30.
    width: 30, // Consider making this dynamic or responsive if needed.
    height: 30,
    borderRadius: 8,
  },
  eventInfoText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  songSelectHeader: {
    flexDirection: 'row',
    backgroundColor: '#c076eb',
    justifyContent: 'space-between',
    padding: 10,
    // borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
  },
  songInfoRow: {
    flexDirection: 'row',
    //paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  iconButton: {
    paddingRight: 12,
  },
  songTitle: {
    flex: 1,
    fontSize: 18,
    color: '#1e1e1e',
  },
  songPosition: {
    fontSize: 16,
    color: '#666',
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8
  },
  controlButton: {
    padding: 5,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
  },
  iconText: {
    fontSize: 20,
  },
  languageToggles: {
    flexDirection: 'row',
    gap: 8,
  },
  langButton: {
    padding: 4,
    backgroundColor: '#d0ebff',
    borderRadius: 8,
  },
  langText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0056b3',
  },
  lyricsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  lyricsContent: {
    paddingBottom: 24,
  },
  lyricsText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#333',
    textAlign: 'left',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#7fde88',
  },
  footerText: {
    fontSize: 12,
    color: '#000'
  },
});