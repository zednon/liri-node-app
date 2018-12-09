require("dotenv").config();

var key = require("./keys")
var axios = require("axios")


var Spotify = require("node-spotify-api")
var spotify = new Spotify(key.spotify);


var programToRun = process.argv[2]
var action = process.argv[3]
var movieName = process.argv[2];
var nodeArgs = process.argv;

if (programToRun === "concert-this") {
    concertThis(action)
} else if (programToRun === "spotify-this-song") {
    spotifyThisSong(action)
}  else if (programToRun === "movie-this") {
    movieThis() 
}  else if (programToRun === "do-what-it-says") {
    doWhatItSays() 
} else {
    console.log("I don't understand")
}

//I was unable to get this date to run properly

function concertThis(artist) {
    if (artist) {
        var artist = artist
    } else {
        var artist = "halestorm"
    }
    axios.get ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(data){
       
    
    
    console.log(data[0].venue)

        // Name of the venue


        // Venue location
        
        
        // Date of the Event (use moment to format this as "MM/DD/YYYY")


    })
}


    
function spotifyThisSong(song) {
    if (song) {
        var song = song
    } else {
        var song = "the sign Ace of Base" 
    }

    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
    
    console.log(data.tracks.items[0].artists[0].name); 
    console.log(data.tracks.items[0].name)
    console.log(data.tracks.items[0].external_urls.spotify)
    console.log(data.tracks.items[0].album.name)
    });
}
