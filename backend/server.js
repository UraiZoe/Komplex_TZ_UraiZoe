const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "felveteli",
    user: "root",
    password: ""
});



app.get('/SelectAgazat', (req, res) => {
    const sqlParancsok = "SELECT agazat, nyek FROM tagozatok;`;"
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})

app.get('/Agazatok', (req, res) => {
    const sqlParancsok = "SELECT diakok.nev, tagozatok.agazat, (diakok.hozott+ diakok.kpmagy + diakok.kpmat) AS pontszam FROM diakok INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN tagozatok ON jelentkezesek.tag = tagozatok.akod;`;"
    db.query(sqlParancsok, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);  
    })
})
app.get('/Agazatok/:id', (req, res) => {
    const sqlParancsok = "SELECT  diakok.nev, tagozatok.agazat, (diakok.hozott+ diakok.kpmagy + diakok.kpmat) AS pontszam,  tagozatok.agazat, tagozatok.nyek FROM diakok INNER JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak INNER JOIN tagozatok ON jelentkezesek.tag = tagozatok.akod WHERE tagzozatok.agazat = ? ORDER BY pontszam LIMIT 32; `;"
    db.query(sqlParancsok, req.params.id, (err, result)=> {
        if(err){
            res.json(err);
        }
        res.json(result);
    })
})
app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})