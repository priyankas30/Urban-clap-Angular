const express=require('express');
const cors= require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const dbadduser=require('./adduser');

app.get("/add_data", async(req,res)=>{
    try{
        const input=req.query;
    await dbadduser.adduser(input);
    res.json({ message: "success" });
     }
    catch(err){
        const json={message:"sorry..Data not found"};
        res.json(json);
    }
});


app.post("/add_data", async(req,res)=>{

   try{
    const input= req.body;
   //console.log(input);
    await  dbadduser.adduser(input);
    const json={message:"Data successfully added"};
    res.json(json);
} catch(err) {
   const json={message:"sorry..Data not found",};
   res.json(json);
}
});
/*
app.post("/add_data", async (req, res) => {
    try {
      const input = req.body;
  
      await dbadduser.adduser(input);
  
      res.json({ message: "success" });
    } catch (err) {
      res.sendStatus(500);
    }
  });
*/

app.post("/auth-user", async(req,res)=>{
    try{
        const input = req.body;
        await dbadduser.authenticateuser(input);
        res.json({opr:true});

    } catch(err){
        res.json({opr: false });

    }
});

app.listen(3000);




