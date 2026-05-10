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
import { PerformanceEventInfo } from './components/PerformanceEvent';
import { SetList } from './components/SetList';
import { AppStyles as styles } from './AppStyles'; // Renamed import
import { PageContentStyles } from './components/PageContentStyles';
import { PageContent } from './components/PageContent';

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
  const [language, setLanguage] = useState("en");

  function onLanguageButtonPress(event: any, lang: string) {
    setLanguage(lang);
  }

  function setLocaterWrapper(newLocater: LocaterState) {
    setLocater(newLocater);
    console.log(`Saving settings: Set ${newLocater.setNumber}, Song ${newLocater.songNumber}`);
    AsyncStorage.setItem(storageKey, JSON.stringify({ setNumber: newLocater.setNumber, songNumber: newLocater.songNumber }))
      .catch(e => console.error("Failed to save settings", e));
  };

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
    console.log("Toggling event details. Current state:", showEventDetails);
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
    <SafeAreaView style={styles.container}> {/* Using AppStyles.container */}
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
          <Text style={styles.artistName}>Artist - {current.event.artist.name}</Text>
        </TouchableOpacity>
      </View>

      {/* AppInfo Area */}
      {showAppInfo && (
        <AboutApp
          show={true}
          closeMenu={toggleAppInfo} />
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

        <Text style={styles.eventInfoText}>{current.event.title} @ {current.event.venue.name}</Text>

        <Image
          source={Images.turtlelogo}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* New Collapsible Event Details Area */}
      {showEventDetails && (
        <View>
          <PerformanceEventInfo
            perfevent={current.event}
            closePerformanceEventInfo={toggleEventDetails} />
          <VenueInfo
            venue={current.event.venue}
            closeVenueInfo={toggleEventDetails} />
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
          <Text style={styles.songTitle}>{current.song.title}</Text>

        </View>
        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.controlButton} accessibilityLabel="Previous Song" onPress={onPrevious}>
            <Ionicons name="caret-back" size={20} color="#1e1e1e" />
          </TouchableOpacity>
          <Text style={styles.songPosition}>{current.position}</Text>          
          <TouchableOpacity onPress={onNext} style={styles.controlButton} accessibilityLabel="Next Song">
            <Ionicons name="caret-forward" size={20} color="#1e1e1e" />
          </TouchableOpacity>
          <View style={styles.languageToggles}>
            <TouchableOpacity onPress={() => onLanguageButtonPress(null, "en")} accessibilityLabel="English Language Selector">
              <View style={[styles.langButton, language === "en" ? PageContentStyles.borderWhite : PageContentStyles.borderBlack]}>
                <SvgUri width="24" height="24" uri={Images.usaFlag} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onLanguageButtonPress(null, "de")} accessibilityLabel="German Language Selector">
              <View style={[styles.langButton, language === "de" ? PageContentStyles.borderWhite : PageContentStyles.borderBlack]}>
                <SvgUri width="24" height="24" uri={Images.germanyFlag} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* New Collapsible Song Details Area */}
      {showSongDetails && (
        <View style={styles.songDetailsArea}>
          <SetList locater={locater} setLocater={setLocaterWrapper} closeModal={toggleSongDetails} />
        </View>
      )}

      {/* 4. Lyrics View */}
      <ScrollView style={styles.lyricsContainer} contentContainerStyle={styles.lyricsContent}>
        <PageContent
          current={current}
          onLanguageButtonPress={onLanguageButtonPress}
          language={language}
          showSidebar={showSongDetails}
          toggleSidebar={toggleSongDetails}
          showVenue={showEventDetails}
          toggleVenueModal={toggleEventDetails}
          onNext={onNext}
          onPrevious={onPrevious}
          isFirst={isFirst}
          isLast={isLast}
        />
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