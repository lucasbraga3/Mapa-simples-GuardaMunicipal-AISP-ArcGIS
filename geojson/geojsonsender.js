
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
app.listen(8080, ()=>{
    console.log("Sever is now listening at port 8080");
})
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static('files'))
app.get('/guardas_mun.geojson', function (req, res) {
    const fileName = 'guardas_mun.geojson';
    res.sendFile(path.join(__dirname, '../geojson', 'guardas_mun.geojson'));
});