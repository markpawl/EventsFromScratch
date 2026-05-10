import { StyleSheet } from 'react-native';

export const PerformanceEventStyles = StyleSheet.create({
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
  perfevent: {
    backgroundColor: 'bisque',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'chocolate',
    padding:0,
    margin:0,
    borderRadius: 8,
    flexDirection: 'column',
  },
  bio: {
    margin: 10,
  },
  perfeventHeader: {
    margin: 0,
    padding: 0,
    fontSize: 18,
    flexDirection: 'column',
  },
  perfeventInfo: {
    margin: 0,
    marginTop: 10,
    flexDirection: 'column',
  },
  perfeventButton: {
    position: 'absolute',
    right: 0,
    margin: 8,
    marginTop: 5,
  },
});