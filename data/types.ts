// Define common sub-structures first
export interface SocialLinks {
  website: string;
  email: string;
  bandcamp?: string;
  videos?: string;
}

export interface Song {
  // Assuming a song has a title and potentially other data
  title: string;
  [key: string]: any; 
}

export interface SetList {
  name: string;
  time: string;
  songs: Song[];
}

// Main export interfaces
export interface Artist {
  name: string;
  description: string;
  biography: string; // Assuming 'biography' variable is a string
  image: string;
  links: SocialLinks;
}

export interface Venue {
  name: string;
  description: string;
  location: string;
  image: string;
  links: Pick<SocialLinks, 'website' | 'email'>; 
}

export interface PerformanceEvent {
  title: string;
  venue: Venue;
  artist: Artist;
  sets: SetList[];
}

export interface LocaterState {
  performanceEvent: PerformanceEvent;
  setNumber: number;
  songNumber: number;
}

export interface CurrentState {
  event: PerformanceEvent;
  songSet: SetList;
  song: Song;
  position: string;
}