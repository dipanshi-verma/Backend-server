import express from "express"
const app = express()
import cors from 'cors'
app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials:true
    }
))

app.get("/",(req,res)=>
{
         res.send("Hello");
})

app.get("/men",(req,res)=>{
 res.send(
    [
        {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
    ]
 )
})

// app.get('/:id',(req,res)=>
// {
//     console.log(req.params.id);
//     res.send("hello from Id");
// })
app.get("/:color",(req,res)=>
{
    res.send(req.params.color);
})


app.listen(9000,()=>
{
    console.log("Server is running on port 9000");
})
