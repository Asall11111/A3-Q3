const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");

const port=3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/A3Q3.html");
});
app.post('/submit',(req,res)=>{
  const{name,phoneNum}=req.body;

  const phoneFormat=/^\d{3}-\d{3}-\d{4}/;
  if(phoneNum.match(phoneFormat)){
    res.send(`<h1>Success!</h1>
    <p>thank you ${name} your phone number (${phoneNum})is submitted successfully!</p>`);

  }else{
    res.send(`Sorry, ${name}. The number you have entered is invalid ${phoneNum}. Please try again. Make sure your number has  ddd-ddd-dddd format`);
  }
});
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})
