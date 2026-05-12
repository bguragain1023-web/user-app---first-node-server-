
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 8000;
const __dirname = path.resolve();



// serve static files fronm public folder
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true})) // to parse the form data and make it available in req.body






// HomePAge controller
app.get("/", (req, res) => {
res.sendFile(__dirname + "/src/html/index.html");
});

// user registration controller
const fileName = "userList.csv";
app.get("/register", (req, res) => {
    console.log(req.query);
    console.log("data recieved")
    
res.sendFile(__dirname + "/src/html/register.html");
});
app.post("/register", (req, res) => {
  
    const {name, email, password} = req.body;

    const str = `${name}, ${email}, ${password} \n`;

    // create file and wrote data to it
fs.appendFile(fileName, str, (error) =>{
    error ? console.log(error) : console.log("data written successfully")
})

    
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