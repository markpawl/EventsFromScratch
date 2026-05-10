import { StyleSheet } from 'react-native';

export const SetListStyles = StyleSheet.create({
  // Styles for the container that would typically hold the <ul> content when .show is applied
  songList: {
    padding: 0,
  },
  // Styles for the caret icon within the setTitle
  // Note: For Ionicons, fontSize and color are usually passed as props directly to the component,
  // but if it were a Text component, these styles would apply.
  caretIcon: {
    fontSize: 16, // 'medium' is typically 16px
    color: '#333', // Default color for caret
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'flex', // React Native uses 'flex' for block-like behavior
  },
  songIndent: {
    marginLeft: 15,
  },
  setTitle: {
    backgroundColor: 'rgb(232, 183, 124)',
    marginBottom: 5,
    padding: 5,
    flexDirection: 'row', // To align caret and text
    alignItems: 'center', // To vertically center caret and text
  },
  defaultSetTitleText: { // New style for the default text appearance
    color: 'rgb(145, 54, 54)',
    fontWeight: 'normal', // Default font weight
  },
  eventTitle: {
    backgroundColor: 'chocolate',
    color: 'bisque',
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  setSelected: {
    fontWeight: 'bold',
    color: 'black',
  },
  // Style for bolded song in the list
  bolded: {
    fontWeight: 'bold',
  },
    normal: {
    fontWeight: 'normal',
  },
  songListItem: {
    paddingVertical: 2, // Add some vertical padding for touchable area
  }
});