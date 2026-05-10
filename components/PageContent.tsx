import { View, Text, TouchableOpacity } from 'react-native';
import { PageContentStyles as styles } from './PageContentStyles';

export const PageContent = (params:any) => {

    function getArtist(){
        if(params.current.song.artist){
            return params.current.song.artist;
        }else{
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
            <Text style={styles.preContent}>{getLyrics() + " (c) " + getArtist()}</Text>
            <View style={styles.pageEnd}></View>
        </View>
    );
}