export interface VenueLinks {
  website?: string;
  phone?: string;
  email?: string;
}

export interface Venue {
  name: string;
  description: string;
  location?: string;
  image: string; // "../assets/xxx.jpg" or absolute URL
  links?: VenueLinks;
}

export interface ArtistLinks {
  website?: string;
  bandcamp?: string;
  email?: string;
  videos?: string;
}

export interface Artist {
  name: string;
  description?: string;
  biography?: string;
  image: string; // "../assets/xxx.jpg" or absolute URL
  links?: ArtistLinks;
}

export interface Song {
  title: string;
  "lyrics-en"?: string;
  "lyrics-de"?: string;
  artist?: string; // optional override
}

export interface Set {
  name: string;
  time?: string;
  songs: Song[];
}

export interface Event {
  title: string;
  venue: Venue;
  artist: Artist;
  sets: Set[];
}

export interface Locater {
  event: Event;
  setNumber: number; // index
  songNumber: number; // index
}
