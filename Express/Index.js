const express = require("express");
const app = express();

let port = 8080;
app.listen(port , ()=> {
    console.log(`app is listening on port${port}`);
});

app.get ("/:username/:id",(req,res) =>{
    let {username ,id} = req.params;
    res.send(`Welcome to the ${username} page, your id is ${id}`);
})

// app.get("/",(req ,res) =>{
//     res.send("Hey , I am root");
// });

// app.get("/Apple",(req ,res) =>{
//     res.send("you contected Apple path");
// });

// app.get("/Banana",(req ,res) =>{
//     res.send("you contected banana path");
// });

// app.use((req ,res) =>{
//     // console.log(req);
//     console.log("request received");
//     let code = "<h1> Fruits </h1> <ul> <li> Apple</li> <li>Banana </li> </ul>"
//     res.send(code);
// })