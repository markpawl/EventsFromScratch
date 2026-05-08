import {markPawlowski} from "../artists";
import {setLists} from "../songs"
import { PerformanceEvent } from "../types";

const eventObject: PerformanceEvent = {
    "title": "Beach Party", 
    "venue": {
        "name": "Altona TSV",
        "description": "Altonaer Turn- und Sportverein",
        "location": "Hamburg, Germany",
        "image": "images/ATSV-image-300.jpg",
        "links": {
            "website": "https://atsv1899.de/",
            "phone": "040 - 439 50 93",
            "email": "atsv1899@aol.com"
        }
    },    
    "artist": markPawlowski,
    "sets": [
        { "name": "A", "time":"5:00-5:30", "songs": setLists['beachA'] },
        { "name": "B", "time":"6:00-6:30", "songs": setLists['beachB'] },
        { "name": "C", "time":"7:00-7:30", "songs": setLists['beachA'] },
        { "name": "D", "time":"8:00-8:30", "songs": setLists['beachB'] },        
    ]
}

export default eventObject;