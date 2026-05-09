import { StyleSheet } from 'react-native';

export const ArtistStyles = StyleSheet.create({
  container: { // Renamed from menumodal, now acts as the inline expanded area
    backgroundColor: '#abe08f', // Light blue background for the expanded area
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d0ebff',
    marginBottom: 10,
    marginTop: 10,
    minHeight: 100, // Initial square shape, will expand vertically with content
    justifyContent: 'space-between', // For content and close button
    // Removed absolute positioning, width, left, top for inline behavior
  },  
  closeIcon: {
    fontSize: 20,
    color: '#333',
  },
  artist2: { },
  artist: {
    marginBottom: 10,
    paddingBottom: 10,
    height: '80%',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkgrey',
  },
  bio: {
    margin: 10,
  },
  artistImg: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginRight: 10,
  },
  artistModal: {
    position: 'absolute',
    width: 90,
    left: 5,
    top: 42,
    backgroundColor: 'white', // Changed from background-color
  },
  artistHeader: {
    margin: 10,
    flexDirection: 'row', // Changed from flex-direction; removed display: 'flex' (default)
  },
  artistInfo: {
    margin: 10,
    flexDirection: 'column', // Removed display: 'flex' (default)
  },
  artistButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 8,
    marginTop: 5,
    height: 28,
    
    // Removed display: 'inline' (not supported in React Native)
  },
});