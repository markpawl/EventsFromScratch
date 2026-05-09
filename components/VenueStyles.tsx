import { StyleSheet } from 'react-native';

export const VenueStyles = StyleSheet.create({
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
  venue: {
    backgroundColor: 'bisque',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'chocolate',
  },
  bio: {
    margin: 10,
  },
  venueImg: {
    height: 75,
    marginRight: 10,
  },
  venuemodal: {
    position: 'absolute',
    width: '90%',
    left: 25,
    top: 78,
    backgroundColor: 'white',
  },
  venueHeader: {
    margin: 10,
    // display: 'flex' is default in React Native
    flexDirection: 'row',
  },
  venueInfo: {
    margin: 10,
    flexDirection: 'column',
  },
  venueButton: {
    position: 'absolute',
    right: 0,
    margin: 8,
    marginTop: 5,
    height: 28,
    // display: 'inline' is not supported in RN layout
  },
});