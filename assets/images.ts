declare var require: any;
import { Asset } from 'expo-asset';

export const Images = {
  turtlelogo: require('./logo.png'),
  //turtlelogo: require('./logo.svg'), // Assuming this was meant to be a generic logo.svg
  usaFlag: Asset.fromModule(require('./usaFlag.svg')).uri,
  germanyFlag: Asset.fromModule(require('./germanyFlag.svg')).uri,
  qrCode: require('./markpawl-events.vercel.app.QR-Code.png'),
  artistImage: require('./markpawl-01-300.jpg'),
  venueImage: require('./reepschlagerhaus-01-300.jpg'),
};

export function getVenueImage(venueName: string) {
  if (venueName === "Reepschlägerhaus") {
    return require('./reepschlagerhaus-01-300.jpg');
  } else if (venueName === "Poolstrasse 41") {
    return require('./poolstrasse41.jpg');
  } else if (venueName === "Altona TSV") {
    return require('./ATSV-image-300.jpg');
  } else {
    return require('./logo.png'); // Default image if venue name doesn't match
  }
}