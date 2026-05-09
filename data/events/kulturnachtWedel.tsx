import {markPawlowski} from "../artists";
import {setLists} from "../songs"
import { PerformanceEvent } from "../types";

const eventObject:PerformanceEvent = {
    "title": "Kulturnacht Wedel", 
    "description": "A performance at the Reepschlägerhaus in Wedel as part of the Kulturnacht Wedel.",
    "date": "2024-05-25",
    "venue": {
        "name": "Reepschlägerhaus",
        "description": "Historic location in the town of Wedel",
        "location": "Wedel, Germany",
        "image": "images/reepschlagerhaus-01-300.jpg",
        "links": {
            "website": "https://reepschlaegerhaus.de/",
            "email": "Info@reepschlaegerhaus.de"
        }
    },   
    "artist": markPawlowski, 
    "sets": [
        { "name": "A", "time":"5:30-6:00", "songs": setLists['songsA'] },
        { "name": "B", "time":"6:30-7:00", "songs": setLists['songsB'] },
        { "name": "C", "time":"7:30-8:00", "songs": setLists['songsC'] },
        { "name": "D", "time":"Other...", "songs": setLists['songsD'] },
    ]
}

export default eventObject;