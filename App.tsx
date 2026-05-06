import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
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

export default function MainScreen() {
  const size: number = 30; // This `size` variable is not used in the provided code.
  const [showExpandedArea, setShowExpandedArea] = useState(false);
  // New state for the event details area
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [showSongDetails, setShowSongDetails] = useState(false); // New state for the song details area

  const toggleSongDetails = () => {
    setShowSongDetails(!showSongDetails);
    setShowExpandedArea(false);
    setShowEventDetails(false);
  };

  const toggleEventDetails = () => {
    setShowEventDetails(!showEventDetails);
    setShowExpandedArea(false);
    setShowSongDetails(false);
  };

  // This function now also closes other open sections
  const toggleExpandedArea = () => {
    setShowExpandedArea(!showExpandedArea);
    setShowEventDetails(false);
    setShowSongDetails(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      {/* 1. Top Navigation Bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={styles.menuButton}
          accessibilityLabel="Main Menu Button"
          onPress={toggleExpandedArea}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.artistName}>Artist - Fname Lname</Text>
      </View>

      {/* Expanded Area */}
      {showExpandedArea && (
        <View style={styles.expandedArea}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleExpandedArea}>
            <Text style={styles.closeIcon}>X</Text>
          </TouchableOpacity>
          <View style={styles.expandedContent}>
            <Text>This is the expanded information area.</Text>
            <Text>It can contain various details about the event or app.</Text>
            <Text>It should expand vertically based on its content.</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
            <Text>More content...</Text>
          </View>
        </View>
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
          source={Images.logopng}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* New Collapsible Event Details Area */}
      {showEventDetails && (
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
      <View style={styles.footer}>
        <Text style={styles.footerText}>© Copyright and Footer Info</Text>
      </View>
      <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
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
