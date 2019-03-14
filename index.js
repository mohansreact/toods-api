var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser"),
    port    = process.env.PORT || 3000;
    
    
var todoRoutes =    require("./routes/todos"); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api/todos", todoRoutes);

app.get("/", function(req, res) {
    res.send("Todo Api");
});

    
app.listen(port, function() {
    console.log("App is running" + port);
})