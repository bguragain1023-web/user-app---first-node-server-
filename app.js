import express from 'express';
import path from 'path';

const app = express();
const PORT = 8000;
const __dirname = path.resolve();


// app.get('/', (req, res, next) => {

// console.log("we got the request");
// res.send("<h1>hello world</h1><p>@djbfhasff hjfsfhb i am brazesg</p>");
// });

app.get("/", (req, res) => {
res.sendFile(__dirname + "/src/html/index.html");
});


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`http://localhost:${PORT}`);
})