import { Artist } from "../../types";

const biography =
    `
Mark is a self-taught musician, singer-songwriter, engineer and producer. He was born in Brooklyn and grew up nearby. He later lived in Woodstock, New York for 10 years and recently crossed the pond to make music in Hamburg, Germany.

As a storyteller, Mark wants to inspire listeners to embrace this amazing world. With texts that paint pictures, he invites you to experience the wonders of true love, tragic loss and real hope.

His latest album “Just Like That” is a testament to his dedication and talent. The collection of songs captures life's essential ups and downs with clarity, honesty and occasionally a little humor.

Whether it's the introspective ballad "Goodbye" or the upbeat groove of "Together" - Mark's music radiates a depth that transcends all genres. His songs are shaped by experiences and emotions that leave a lasting impression.
Anyone who subscribes to streaming services such as Apple Music and Spotify can find Mark's music there. For more information, songs and videos, visit markpawl.com
`;

let artist: Artist = {
    "name": "Mark Pawlowski",
    "description": "Singer Songwriter from the USA, living in Hamburg Germany",
    "biography": biography,
    "image": "images/markpawl-01-300.jpg",
    "links": {
        "website": "http://www.markpawl.com",
        "bandcamp": "https://markpaw.bandcamp.com/",
        "email": "markpawl.music@gmail.com",
        "videos": "https://www.markpawl.com/videos"
    }
}


export default artist;