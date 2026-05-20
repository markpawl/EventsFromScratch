import { StyleSheet } from 'react-native';

// Define base font sizes for consistency
const baseFontSizes = {
  h1: 24, // 24 Large header, e.g., main screen titles
  h2: 20, // Sub-headers, e.g., artist/event names
  h3: 18, // Section titles, e.g., "Event Details"
  body: 16, // Standard body text
  lyrics: 16, // Slightly smaller for lyrics
  caption: 14, // Smaller text, e.g., song position
  small: 12, // Very small text, e.g., footer
};

// Export specific font size constants for direct use if needed
export const FontSizes = {
  headerText: baseFontSizes.h1,
  plainContent: baseFontSizes.body,
  boldContent: baseFontSizes.body, // Can be same size as plain, but bolded
  artistName: baseFontSizes.h3,
  eventInfo: baseFontSizes.body,
  songTitle: baseFontSizes.body,
  caretIcon: baseFontSizes.h2, // Added caret icon size
  songLyrics: baseFontSizes.lyrics,
  songPosition: baseFontSizes.caption,
  menuIcon: baseFontSizes.h1,
  footer: baseFontSizes.small,
};

// Export common typography styles as a StyleSheet object
export const Typography = StyleSheet.create({
  headerText: {
    fontSize: FontSizes.headerText,
    fontWeight: 'bold',
  },
  plainContent: {
    fontSize: FontSizes.plainContent,
    color: '#333',
  },
  boldContent: {
    fontSize: FontSizes.boldContent,
    fontWeight: 'bold',
    color: '#333',
  },
  artistName: {
    fontSize: FontSizes.artistName,
    fontWeight: 'bold',
    color: '#333',
  },
  eventInfoText: {
    fontSize: FontSizes.eventInfo,
    fontWeight: '500',
    color: '#1e1e1e',
  },
  songTitle: {
    fontSize: FontSizes.songTitle,
    fontWeight: '500',
    color: '#1e1e1e',
  },
  songPosition: {
    fontSize: FontSizes.songPosition,
    color: '#000000',
  },
  songLyrics: {
    fontFamily: 'System', // Or 'Helvetica Neue', 'Roboto', etc.
    fontSize: FontSizes.songLyrics,
    color: '#000000',
  },  
  caretIcon: {
    fontSize: FontSizes.caretIcon,
    color: '#333', // Default color for caret
  },
  menuIcon: {
    fontSize: FontSizes.menuIcon,
    color: '#333',
  },
  footerText: {
    fontSize: FontSizes.footer,
    color: '#000',
  },
});