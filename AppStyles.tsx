import { StyleSheet } from 'react-native';

export const AppStyles = StyleSheet.create({
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
  songDetailsAreax: {
    backgroundColor: '#bf52b2',
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
        //flex: 1,
    fontSize: 20,
    fontWeight: '500',
    color: '#1e1e1e',
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
    flex: 1, 
    marginRight: 10,    
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  iconButton: {
    paddingRight: 12,
  },
  songTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
    color: '#1e1e1e',
  },
  songPosition: {
    fontSize: 20,
    color: '#000000',
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