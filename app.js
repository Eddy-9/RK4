const express = require("express");
const app = express();
app.use(express.static(__dirname));
const urlencodedParser = express.urlencoded({ extended: false });

app.post("/download", urlencodedParser, function (request, response) {

});
port = 5500;
app.listen(port, () => console.log("Server up, port: ", port));