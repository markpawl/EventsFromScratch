import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PerformanceEventStyles } from './PerformanceEventStyles';
import { PerformanceEvent } from '../data/types';

interface perfeventParams {
    perfevent: PerformanceEvent;
    closePerformanceEventInfo: () => void;
}

export function PerformanceEventInfo(params: perfeventParams) {

    const handleLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <View style={PerformanceEventStyles.container}>
            {/* Close Button */}           
            <TouchableOpacity
                style={PerformanceEventStyles.perfeventButton}
                onPress={(event) => params.closePerformanceEventInfo()}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Increase touch target area
            >
                <Ionicons name="close-circle-outline" size={30} color="#333" />
            </TouchableOpacity>

            <View style={PerformanceEventStyles.perfeventHeader}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Performance Event</Text>
                <Text style={{ fontSize: 18 }}>{params.perfevent.title}</Text>
            </View>

            <View style={PerformanceEventStyles.perfeventInfo}>
                <Text style={{ marginBottom: 0 }}>{params.perfevent.description}</Text>
                <Text style={{ marginBottom: 10 }}>{params.perfevent.date}</Text>
            </View>
        </View>
    );
}