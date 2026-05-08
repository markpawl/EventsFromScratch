import { StyleSheet } from 'react-native';

export const AboutAppStyles = StyleSheet.create({
  container: { // Renamed from menumodal, now acts as the inline expanded area
    backgroundColor: '#f0f8ff', // Light blue background for the expanded area
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d0ebff',
    marginBottom: 10,
    minHeight: 100, // Initial square shape, will expand vertically with content
    justifyContent: 'space-between', // For content and close button
    // Removed absolute positioning, width, left, top for inline behavior
  },
  menuButton: {
    position: 'absolute',
    top: 5, // Adjusted to match previous closeButton top
    right: 10, // Adjusted to match previous closeButton right
    padding: 5, // Adjusted to match previous closeButton padding
    zIndex: 1, // Ensure the button is clickable
    justifyContent: 'center', // Center the 'X' icon
    alignItems: 'center',     // Center the 'X' icon
  },
  closeIcon: {
    fontSize: 20,
    color: '#333',
  },
  // ... other styles remain the same
  menuHeader: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuHeaderH1: {
    margin: 0,
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuInfo: {
    flexDirection: 'column',
    marginLeft: 10,
    marginBottom: 10,
  },
  menuInfoH3: {
    margin: 0,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  preContent: {
    marginTop: 0,
    lineHeight: 24,
    fontSize: 19.2,
    // fontFamily: 'sans-serif', // Removed as it requires custom font loading
  },
  menumodalImg: {
    width: 150,
    height: 150, // Added height for Image component
    resizeMode: 'contain', // Example resizeMode
  },
  menuInfoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  menuLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});