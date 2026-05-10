
import { StyleSheet } from 'react-native';

export const PageContentStyles = StyleSheet.create({
  preContent: {
    margin: 10,
    // React Native doesn't support CSS font stacks directly.
    // You'd typically specify a single font family name that's loaded.
    // Using a generic system font for now.
    fontFamily: 'System', // Or 'Helvetica Neue', 'Roboto', etc.
    fontSize: 18, // 'large' is typically 18px
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
  }
});