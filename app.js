
import express from 'express';
import path from 'path';
import fs from 'fs';
import { mergeHtmlStrings } from './src/html/fileMerger.js';



const app = express();
const PORT = 8000;
const __dirname = path.resolve();



// serve static files fronm public folder
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true})) // to parse the form data and make it available in req.body






// HomePAge controller
app.get("/", (req, res) => {
    // read the text file
    fs.readFile(fileName,'utf8', (error, data)=>{
        if(error){
            console.log(error);
            res.sendFile(__dirname + "/src/html/index.html");
        }
        else{
            res.send(mergeHtmlStrings(data.split("\n") ));
        }
     
    });
    
});

// user registration controller
const fileName = "userList.csv";
app.get("/register", (req, res) => {
  
    
res.sendFile(__dirname + "/src/html/register.html");
});
app.post("/register", (req, res) => {
  
    const {name, email, password} = req.body;

    const str = `${name},${email},${password}\n`;

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
app.post("/login", (req, res)=>{
    const { email, password } = req.body;
    const str = email+"," + password;
    
    fs.readFile(fileName, "utf8", (error , data) => {
        if(error){
        console.log(error);
     res.send("<h3>Sorry the login detail coundn't fpund</h3>");

    }
    else{
        const userDetail = data.split("\n");
const person = userDetail.find(line=> line.includes(str));
person ?.length 
? res.send(`<h3>Hi ${person.split(",")[0]} Welcome back</h3>`) :
res.send(`<h3> Error, Invalid login details </h3>`)
    }





    });
    
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