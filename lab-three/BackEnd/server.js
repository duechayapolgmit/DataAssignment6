const express = require('express') // Requires Express framework
const bodyParser = require('body-parser') // Body parser (middleware)
const app = express() // Express app
const port = 4000 // Port to run in

// CORS handling
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// JSON data
const booksJSON = {
    "books":[
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
        ]
};

// GET request
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})
// GET request in hello, printing out "hello name" if called hello/name
app.get('/hello/:name', (req, res) => {
    res.send('Hello '+req.params.name)
})
// GET request, returning the JSON in mybooks variable
app.get('/api/books', (req, res) => {
    res.json({
        mybooks: booksJSON,
        message: "Books returned"
    })
})
// POST request, returning the JSON
app.post('/api/books', (req, res)=>{
    console.log(req.body);
    res.send("Data Recieved")
})

/* FORM HANDLING */
// GET request, for name
app.get('/name', (req,res)=> {
    res.send('Hello '+req.query.f4rstName+' '+req.query.lastName);
});
// POST request, for name -- more secure
app.post('/name', (req,res)=> {
    res.send('Hello '+req.body.firstName+' '+req.body.lastName);
});

// LISTEN to any requests in localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})