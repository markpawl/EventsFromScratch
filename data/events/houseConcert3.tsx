import {markPawlowski} from "../artists";
import {setLists} from "../songs"
import { PerformanceEvent } from "../types";

const eventObject: PerformanceEvent = {
    "title": "House Concert III", 
    "description": "An intimate house concert in a historic apartment in Hamburg, Neustadt.",
    "date": "2024-10-26",
    "venue": {
        "name": "Poolstrasse 41",
        "description": "Our historic apartment in Neustadt.",
        "location": "Hamburg, Germany",
        "image": "images/poolstrasse41-368.jpg",
        "links": {
            "website": "https://markpawl.com/",
            "email": "markpawl.music@gmail.com"
        }
    },    
    "artist": markPawlowski,
    "sets": [
        { "name": "", "time":"The Acoustic Project", "songs": setLists['album1'] },
        { "name": "", "time":"More", "songs": setLists['album2'] },
        { "name": "", "time":"Just Like That", "songs": setLists['album3'] },
        { "name": "", "time":"Other", "songs": setLists['other'] },        
    ]
}

export default eventObject;