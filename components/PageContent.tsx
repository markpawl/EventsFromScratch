import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { PageContentStyles as styles } from './PageContentStyles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;
const lyricsHeight = Dimensions.get('window').height - 250;

export const PageContent = (params: any) => {

    const [textWidth, setTextWidth] = useState(0);

    // Check if text is wider than the screen
    const isOverflowing = textWidth + 5 > screenWidth;

    function getArtist() {
        if (params.current.song.artist) {
            return params.current.song.artist;
        } else {
            return params.current.event.artist.name;
        }
    }

    function getLyrics() {
        switch (params.language) {
            case "de": // german
                return params.current.song["lyrics-de"]
            default: // english
                return params.current.song["lyrics-en"]
        }
    }

    return (
        <View>
            <View style={{ top:0, height:lyricsHeight}} >{/* Set a fixed height for the ScrollView container */}
                <ScrollView >
                    <View>
                        <ScrollView horizontal={true} >
                            <Text
                                style={styles.preContent}
                                onLayout={(event) => {
                                    const { width } = event.nativeEvent.layout;
                                    setTextWidth(width);
                                }}
                            >
                                {getLyrics() + " (c) " + getArtist()}
                            </Text>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            {/* Static Overflow Indicator */}
            {isOverflowing && (
                
                <View style={[styles.overflowIndicator]}>
                    <Ionicons 
                    name="chevron-forward-outline" 
                    size={30} 
                    color="rgb(122, 123, 122)" /> 
                </View>
            )}

            {/* <View style={styles.pageEnd}></View> */}
        </View >
    );
}