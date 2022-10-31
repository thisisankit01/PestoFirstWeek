import express from 'express';

const app = express();//this is our app or instance of express.
const port = 5500;

//api middlewares
app.use(express.json()); //this is to accept data in json format
app.use(
  express.urlencoded({ //this is basically to decode the data sent by html format.
    extended : "true"
})
);
app.use(express.static('public'));//serve our public folder as static folder 

//api routes
app.get("/form",(req,res) => {
console.log(req.name);
console.log(req.surname);
console.log(req.body);
console.log(req.url);
console.log(req.query);
res.send("recieved");
});

app.post("/form",(req,res) => {// the data we get is in the body of request
  console.log(req.query);
  res.send("recieved");
});

//listening on the given port.
app.listen(port,()=>{
  console.log(`app is listening at http://localhost:${port}`);
});
