declare var require: any;
import { Asset } from 'expo-asset';

export const Images = {
  logopng: require('./logo.png'),
  logosvg: require('./logo.svg'), // Assuming this was meant to be a generic logo.svg
  usaFlag: Asset.fromModule(require('./usaFlag.svg')).uri,
  germanyFlag: Asset.fromModule(require('./germanyFlag.svg')).uri,
};