import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { AboutAppStyles } from './AboutAppStyles';
import { Images } from '../assets/images';

interface AboutAppProps {
  show: boolean;
  closeMenu: (event: any) => void; 
}

export function AboutApp(params: AboutAppProps) {

  let preText =
    `This app contains:
- Artist Info
- Event Info
- Set Lists
- Song Lyrics
`;

  return (
    <View style={AboutAppStyles.container}>
      <TouchableOpacity style={AboutAppStyles.menuButton} onPress={params.closeMenu}>
        <Text style={AboutAppStyles.closeIcon}>X</Text>
      </TouchableOpacity>
      <View style={AboutAppStyles.menuHeader}>
        <Text style={AboutAppStyles.menuHeaderH1}>Event App</Text>
      </View>
      <View style={AboutAppStyles.menuInfo}>
        <Text style={AboutAppStyles.preContent}>{preText}</Text>
        <Text style={AboutAppStyles.menuInfoH3}>Share this App</Text>
        {/* Assuming Images.qrCode is defined in assets/images.ts */}
        <Image source={Images.qrCode} style={AboutAppStyles.menumodalImg} />
        <Text style={AboutAppStyles.menuInfoH3}>Contact</Text>
        <TouchableOpacity onPress={() => Linking.openURL('http://markpawl.com')}>
          <Text style={AboutAppStyles.menuLink}>http://markpawl.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto://markpawl.music@gmail.com')}>
          <Text style={AboutAppStyles.menuLink}>markpawl.music@gmail.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}