const express = require('express');
const path = require('path');
const app = express();

//Set views as default view folder
app.set('views', path.join(__dirname, 'views'));

//Set pug as view engine 
app.set('view engine', 'pug');

// Set public as static path
app.use(express.static(path.join(__dirname, 'public')));

// Default Route
app.get('/', (req, res) => {
    var data = [ 
        { listTitle: "Music",
          listItems: [
                    { src : "https://www.youtube.com/embed/Rd9wF5fAnVw", title : "Dhadhak - Zingaat" }, 
                    { src : "https://www.youtube.com/embed/n2u81Ujc93g", title: "Satyamev Jayte - Dilbar"},
                    { src : "https://www.youtube.com/embed/RCgbE6eS-DU", title: "Sanju - Kar Har Maidan Fateh"}
                ]
                },
            {
                listTitle: "Comedy",
                listItems: [ { src : "https://www.youtube.com/embed/Rd9wF5fAnVw", title : "Dhadhak - Zingaat" }, 
                { src : "https://www.youtube.com/embed/n2u81Ujc93g", title: "Satyamev Jayte - Dilbar"},
                { src : "https://www.youtube.com/embed/n2u81Ujc93g", title: "Satyamev Jayte - Dilbar"}]
            }];
    res.render('index', {data : data});
})

app.listen(3000, (req, res) => {
    console.log('listening to port 3000...');
})