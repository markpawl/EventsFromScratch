
import { StyleSheet } from 'react-native';
import { Typography } from '../styles/typography'; // Import centralized typography styles

export const PageContentStyles = StyleSheet.create({
  preContent: {
    marginLeft: 10,
    marginRight: 10,
    ...Typography.songLyrics, // 'large' is typically 18px
    marginTop: 5,
  },
  caretIcon: {
    fontSize: 20, // 'larger' is typically 20px
  },
  songTitle: {
    fontWeight: 'normal',
    fontSize: 16, // 'medium' is typically 16px
    backgroundColor: 'bisque',
    width: 220,
    height: 30,
    paddingTop: 2,
    overflow: 'hidden',
    // 'display: inline-block' is not directly translatable to RN View.
    // For Text components, they are inline by default.
    // For View components, flexbox is used. Given the width/height,
    // it implies a block-like behavior within a flex container.
  },
  songHeader: {
    flexDirection: 'row',
    backgroundColor: 'blanchedalmond',
    padding: 5,
    alignItems: 'center', // Align items vertically in the row
  },
  songHeaderImage: { // Renamed from songHeader img for clarity
    backgroundColor: 'blanchedalmond',
    height: 30,
    width: 30, // Added width as Image needs it
    borderRadius: 4.5, // 15% of 30px height
  },
  eventHeader: {
    backgroundColor: 'bisque',
    padding: 5,
    fontSize: 16, // 'normal' is typically 16px
    fontWeight: 'normal',
    flexDirection: 'row', // Assuming it will contain caret and text
    alignItems: 'center',
  },
  bolded: {
    fontWeight: 'bold',
  },
  borderWhite: {
    borderWidth: 2,
    borderColor: 'blanchedalmond',
    borderStyle: 'solid',
    borderRadius: 3.6, // 15% of 24px height
    justifyContent: 'center', // Center flag image
    alignItems: 'center',    // Center flag image
  },
  borderBlack: {
    borderWidth: 2,
    borderColor: '#aaa',
    backgroundColor: '#aaa',
    borderStyle: 'solid',
    borderRadius: 3.6, // 15% of 24px height
    justifyContent: 'center', // Center flag image
    alignItems: 'center',    // Center flag image
  },
  pageEnd: {
    height: 20,
    backgroundColor: 'bisque',
  },
  reverse: {
    transform: [{ rotate: '45deg' }],
    // ':after' pseudo-elements are not directly supported in React Native.
    // This would typically be achieved by adding another component (e.g., a View or Text)
    // and styling it to achieve the desired visual effect.
  },
  // Additional styles that might be needed for the PageContent component
  languageButton: {
    marginLeft: 5, // Add some spacing between flags
  },
  overflowIndicator: {
    position: 'absolute',
    top: 0,
    right: 10,
    alignItems: 'center',    
    zIndex: 10, // Ensure the indicator is above the ScrollView content
    backgroundColor: 'rgb(212, 212, 212)', // Semi-transparent background for better visibility
    padding: 5,
    borderRadius: 20,
  },
  indicator: {
    backgroundColor: '#007AFF',
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  indicatorWrapper: {
    position: 'absolute',
    right: 5,
    // Using pointerEvents="none" ensures the icon doesn't 
    // block the user's ability to touch and swipe the ScrollView
  },
  indicatorText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  lyricsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  lyricsContent: {
    paddingBottom: 0,
    height: '110%',
    overflow: 'scroll',
 },
  lyricsText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#333',
    textAlign: 'left',
    ...Typography.songLyrics, // 'large' is typically 18px
  },
});