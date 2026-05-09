import { dir } from 'console';
import express from 'express';
import path from 'path';

const app = express();
const PORT = 8000;
const __dirname = path.resolve();



// serve static files fronm public folder
app.use(express.static(__dirname + "/public"));




// app.get('/', (req, res, next) => {

// console.log("we got the request");
// res.send("<h1>hello world</h1><p>@djbfhasff hjfsfhb i am brazesg</p>");
// });



// HomePAge controller
app.get("/", (req, res) => {
res.sendFile(__dirname + "/src/html/index.html");
});

// user registration controller
app.get("/register", (req, res) => {
res.sendFile(__dirname + "/src/html/register.html");
});


//user login controller
app.get("/login", (req, res) => {
res.sendFile(__dirname + "/src/html/login.html");
});

// app.get("/user", (req, res) => {
// res.json({
//     name: "brazesh",
//     age: 23,
//     email: "brazesh@example.com"  
// });
// });


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`http://localhost:${PORT}`);
})