declare var require: any;
import { Asset } from 'expo-asset';

export const Images = {
  turtlelogo: require('./logo.png'),
  //turtlelogo: require('./logo.svg'), // Assuming this was meant to be a generic logo.svg
  usaFlag: Asset.fromModule(require('./usaFlag.svg')).uri,
  germanyFlag: Asset.fromModule(require('./germanyFlag.svg')).uri,
    qrCode: require('./markpawl-events.vercel.app.QR-Code.png'),
};