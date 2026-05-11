import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VenueStyles as styles } from "./VenueStyles";
import { Venue } from "../src/types";
import { Images,getVenueImage } from '../assets/images';

interface venueParams {
    venue: Venue;
    closeVenueInfo: () => void;
}

export function VenueInfo(params: venueParams) {

    const handleLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    const venueWebsiteLink = params.venue.links && params.venue.links.website ? params.venue.links.website : false;
    const emailLink = params.venue.links && params.venue.links.email ? params.venue.links.email : false;

    return (
        <View style={styles.container}>
            {/* Close Button */}
            <TouchableOpacity
                style={styles.venueButton}
                onPress={(event) => params.closeVenueInfo()}
            >
                <Ionicons name="close-circle-outline" size={30} color="#333" />
            </TouchableOpacity>

            <View style={styles.venueHeader}>
                <Image source={getVenueImage(params.venue.name)} style={styles.venueImg} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Venue</Text>
                    <Text style={{ fontSize: 18 }}>{params.venue.name}</Text>
                </View>
            </View>

            <View style={styles.venueInfo}>
                <Text style={{ marginBottom: 10 }}>{params.venue.description}</Text>

                {venueWebsiteLink && (
                    <TouchableOpacity onPress={() => handleLink(venueWebsiteLink)}>
                        <Text>
                            Homepage: <Text style={{ color: 'chocolate', textDecorationLine: 'underline' }}>
                                {venueWebsiteLink}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                )}
                {emailLink && (
                    <TouchableOpacity onPress={() => handleLink(`mailto:${emailLink}`)}>
                        <Text>
                            Email: <Text style={{ color: 'chocolate', textDecorationLine: 'underline' }}>
                                {emailLink}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}