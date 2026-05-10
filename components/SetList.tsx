import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming Ionicons is available as in App.tsx
import { SetListStyles as styles } from './SetListStyles';
import { PerformanceEvent, LocaterState, CurrentState } from '../data/types';

interface SetListProps {
    locater: LocaterState;
    setLocater: (locater: LocaterState) => void;
    closeModal: (event: any) => void;
}

export const SetList = (params: SetListProps) => {
    // locater { EVENT, setNUMBER, songNUMBER }
    const[localLocater, setLocalLocater] = useState({...params.locater});

    let eventObject = localLocater.performanceEvent;
    let selectedSet = localLocater.setNumber;
    let selectedSong = localLocater.songNumber;

    function onSetClick(index:number) {
        if( index === selectedSet){
            setLocalLocater({ ...localLocater, setNumber: -1 });
        }
        if (index !== selectedSet) {
            setLocalLocater({ ...localLocater, setNumber: index, songNumber: -1 });
        }
    }

    function onSongClick(event: any, index: number) {
        setLocalLocater({ ...localLocater, songNumber:index });
        params.setLocater({ ...localLocater, songNumber:index });
        params.closeModal(event);
    }

    interface SetProps {
        setIndex: number;
        set: any; // Assuming set has a name and time property
        songs: any[]; // Assuming songs is an array
    }

    function Set(setParams: SetProps) {
        return (
            <View>
                <TouchableOpacity
                    style={[
                        styles.setTitle,
                    ]}
                    onPress={() => onSetClick(setParams.setIndex)}
                >
                    <Ionicons
                        name={selectedSet === setParams.setIndex ? "caret-down" : "caret-forward"}
                        size={styles.caretIcon.fontSize}
                        color={styles.caretIcon.color}
                    />
                    <Text style={[styles.defaultSetTitleText, selectedSet === setParams.setIndex ? styles.setSelected : {}]} > {setParams.set.name} {setParams.set.time}</Text>
                </TouchableOpacity>
                <View style={selectedSet === setParams.setIndex ? styles.show : styles.hide}>
                    <Songs
                        songs={setParams.set.songs} // Pass only necessary props
                    />
                </View>
            </View>
        );
    }

    interface SetsProps {
        locater: LocaterState;
    }

    function Sets(setsParams: SetsProps) {
        return (<View>{
            setsParams.locater.performanceEvent.sets.map((set, index) => {
                return <Set key={index} setIndex={index} set={set} songs={set.songs} />
            })
        }</View>
        );
    }

    interface SongsProps {
        songs: any[]; // Assuming song has a title property
    }

    function Songs(songsParams: SongsProps) {
        
        return (<View style={styles.songIndent}>
            {songsParams.songs.map((item, index) => {
                let songSelected = (index===selectedSong)?styles.bolded:styles.normal;
                return (
                    <TouchableOpacity
                    key={index}
                    onPress={(event) => onSongClick(event, index)}
                    style={[styles.songListItem]}
                    >
                        <Text   style={songSelected}>{item.title}</Text>
                    </TouchableOpacity>
                );
            })
        }</View>
        );
    }

    return (
        <View>
            <Text style={styles.eventTitle}>Sets & Songs</Text>
            <Sets locater={localLocater} />
        </View>
    )
}