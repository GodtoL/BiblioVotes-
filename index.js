express = require('express')

app = express()

app.get("/", async(req,res) => {
    res.send("hOLA");
})

port = 3001;
app.listen(port, () => {
    console.log("Servidor corriendo en puerto", port);  
})