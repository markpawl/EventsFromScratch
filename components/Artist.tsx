import { ArtistStyles } from "./ArtistStyles";
import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import { Images } from '../assets/images';
import { Ionicons } from '@expo/vector-icons';
import { ArtistStyles as styles } from './ArtistStyles'; // Assuming the file name
import { Artist } from "../src/types";

interface ArtistInfoProps {
  artist: Artist;
  closeSection: () => void;
}

export function ArtistInfo(params: ArtistInfoProps) {

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };
  const websiteLink = params.artist.links && params.artist.links.website ? params.artist.links.website : false;
  const bandcampLink = params.artist.links && params.artist.links.bandcamp ? params.artist.links.bandcamp : false;
  const emailLink = params.artist.links && params.artist.links.email ? params.artist.links.email : false;

  return (
    <View style={ArtistStyles.container}>
    <ScrollView style={ArtistStyles.artist}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.artistButton}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        onPress={(event) => params.closeSection()}
      >
        <Ionicons name="close-circle-outline" size={32} color="#333" />
      </TouchableOpacity>

      <View style={styles.artistHeader}>
        <Image source={Images.artistImage} style={ArtistStyles.artistImg} />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Artist</Text>
          <Text style={{ fontSize: 18 }}>{params.artist.name}</Text>
        </View>
      </View>

      <View style={styles.artistInfo}>
        <Text>{params.artist.description}</Text>
        {websiteLink &&
          (
            <TouchableOpacity onPress={() => openLink(websiteLink)}>
              <Text>Homepage: <Text style={{ color: 'blue' }}>markpawl.com</Text></Text>
            </TouchableOpacity>
          )}
        {bandcampLink &&
          (
            <TouchableOpacity onPress={() => openLink(bandcampLink)}>
              <Text>Bandcamp: <Text style={{ color: 'blue' }}>markpaw.bandcamp.com</Text></Text>
            </TouchableOpacity>
          )}

        {emailLink &&
          (
            <TouchableOpacity onPress={() => openLink(emailLink)}>
              <Text>Email: <Text style={{ color: 'blue' }}>{emailLink}</Text></Text>
            </TouchableOpacity>
          )}
      </View>

      <Text style={styles.bio}>{params.artist.biography}</Text>
    </ScrollView>
    </View>
  );
}