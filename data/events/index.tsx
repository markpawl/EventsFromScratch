import eventKulturnachtWedel from './kulturnachtWedel';
import eventBeachParty from './beachParty';
import eventHouseConcert3 from './houseConcert3';
import { PerformanceEvent } from '../types';

const getPerformanceEvent = (name:string): PerformanceEvent => {
    if (name === 'kulturnachtWedel') {
        return eventKulturnachtWedel;
    } else if (name === 'beachParty') {
        return eventBeachParty;
    } else if (name === 'houseConcert3') {
        return eventHouseConcert3;
    } else {
        console.warn(`Unknown event name: ${name}. Returning first event.`);
        return eventKulturnachtWedel;
    }
};

export default getPerformanceEvent;
