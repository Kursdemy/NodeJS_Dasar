var express = require("express");
var app = express();

// conection Server
app.listen(3000, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Sukses berjalan di port 3000")
    }
});