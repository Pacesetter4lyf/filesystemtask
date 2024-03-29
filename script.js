const fetch = require("node-fetch");
const fs = require('fs');

// GET Request.
fetch('http://jsonplaceholder.typicode.com/posts')
    // Handle success
    .then(response => (response.json()) ) // convert to json
    .then(json => JSON.stringify(json))   //stringify json to text
    .then(data => {
        fs.writeFile('./result/posts.json', data, function (err) {
            if (err) {
                consloe.log("AN ERROR OCCURED")
                throw err;
            }
            console.log('DATA WRITTEN!');
        })
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors





