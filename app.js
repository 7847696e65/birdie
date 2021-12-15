const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('css', express.static(__dirname + 'public/css'))
app.use('img', express.static(__dirname + 'public/img'))
app.use('js', express.static(__dirname + 'public/js'))
app.use('py', express.static(__dirname + 'public/py'))
app.use('bgm', express.static(__dirname + 'public/bgm'))
app.use('sfx', express.static(__dirname + 'public/sfx'))
//app.use('test', express.static(__dirname + 'public/test'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({
  extended: true
}))

const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

var timeInMss = Date.now()

const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
var key = crypto.randomBytes(32);
var iv = crypto.randomBytes(16);
const axios = require('axios').default;


//decode base64
//Buffer.from(base64data, 'base64').toString('ascii')

const btoken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNjYmMyMTA1NGY0MDczYThjNzRmMTFiYzQ5ZmM0OTMxIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2Mzk0NDM1MzgsImV4cCI6MTY0MDczOTUzOCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5teWx5a2FhcHBzLmNvbSIsImF1ZCI6ImFwaTEiLCJjbGllbnRfaWQiOiJyby5jbGllbnQiLCJzdWIiOiJkNDFlMzE1NS0wZWRlLTRmMjYtOTc1Ny0xYzQxNDliYWE5NDAiLCJhdXRoX3RpbWUiOjE2Mzk0NDM1MzgsImlkcCI6ImxvY2FsIiwibmFtZSI6ImRpYW5henViaXJpODkiLCJ1c2VybmFtZSI6ImRpYW5henViaXJpODkiLCJpZCI6IjcwMDAwMzEyMDUxMiIsImp0aSI6Imd3WlNDSl9PWVlxd0ZwVUNLZjQyZkEiLCJzY29wZSI6WyJhcGkxIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.ddT3UOPgow0KjJARxbf_3LXYDFf55cbYapquHVwYv1U2z-Th6K2I9mcoyv96EZuiRQGLB2Q3OgCxUUvbJNjt0pyBmhr9AyjsR_VrGCJNSpSOoRQZhF6g-O6pNd2f6fLOo4v7qOPaII78eVnbwHEiyvAqWMXgHpPbZLhbXAz1Jd-VkXZV5JcGcDRkPDjhqxJCvgcKDqhtY32DHpO_Mwr4iA7ugicz5-Zxs1h75rAV46aoXR6jVAFlOmHieuKbVYDgzIsjN1GlXSPBwK6bZ7PGey9SXo4yWRNOuMjqUewH0-7xEfZY_ittI9Dr0hK73D3kjmhfLeXKFGJynpSiTaKSbw";
const deviceid = "e3e1cfge1k5ne13d";

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lykan_game',
  port: '3306'
})
connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});



app.get('/', (req, res) => {

   //res.set('Content-Type', 'text/html');
   //res.send(Buffer.from('<h2>Bebe time na ubos na. haha</h2>'));

  timeInMss = Date.now();
  key = crypto.randomBytes(32);
  var iv = crypto.randomBytes(16);
  var claim_key = encrypt("dianazubiri89");
  console.log(claim_key.encryptedData);
  var sql = "INSERT INTO tbl_game_instance (claim_key, time) VALUES ('"+claim_key.encryptedData+"', "+timeInMss+")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  console.log("1 record inserted");
  });
  //res.send('Hellos World!');
  //res.json({ game_instance: claim_key.encryptedData })
  //res.send('Hello World!')
  //res.sendFile(__dirname + '/views/index.html')
  res.render('index',{text: claim_key.encryptedData})


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
app.get('/startgame', (req, res) => {
  timeInMss = Date.now();
  key = crypto.randomBytes(32);
  var iv = crypto.randomBytes(16);
  var claim_key = encrypt("dianazubiri89");
  console.log(claim_key.encryptedData);
  var sql = "INSERT INTO tbl_game_instance (claim_key, time) VALUES ('"+claim_key.encryptedData+"', "+timeInMss+")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  console.log("1 record inserted");
  });
  //res.send('Hellos World!');
  res.json({ game_instance: claim_key.encryptedData })
})*/

//app.get('/claim/:claim_key.:lykaun',  (req, res, next) => {
app.post('/claim',  (req, res, next) => {


var lykaunc = req.query.N2FmMjgxMWVlZjQzMmM3MmI5OTcwOTMyN2M2OWJmMjE;
var claim_keyc = req.query.OGY2MzlmYTIzNmMxMzNjNmM5MTMyMjBiMzQxYzVjZDc;
console.log ("Cheater:" + lykaunc);

var lykaun = req.body.N2FmMjgxMWVlZjQzMmM3MmI5OTcwOTMyN2M2OWJmMjE;
var claim_key = req.body.OGY2MzlmYTIzNmMxMzNjNmM5MTMyMjBiMzQxYzVjZDc;
console.log(req.body.N2FmMjgxMWVlZjQzMmM3MmI5OTcwOTMyN2M2OWJmMjE); // lyka un
console.log(req.body.OGY2MzlmYTIzNmMxMzNjNmM5MTMyMjBiMzQxYzVjZDc);  // claim key
 //Buffer.from(req.params.claim_key, 'base64').toString('ascii')	
  /*key = crypto.randomBytes(32)
  var iv = crypto.randomBytes(16);
  var claim_key = encrypt("dianazubiri89");
  console.log(claim_key.encryptedData);
  var sql = "INSERT INTO tbl_game_instance (claim_key, time) VALUES ('"+claim_key.encryptedData+"', "+timeInMss+")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  console.log("1 record inserted");
  });*/
  timeInMss = Date.now()
  var rests;
  connection.query("SELECT * FROM tbl_game_instance WHERE claim_key = '" + claim_key + "' AND status=0", function (err, result) {
    if (err) throw err;
    if (!isEmpty(result)){
    console.log(JSON.stringify(result));
    var status = JSON.stringify(result);
    rests = JSON.parse(status);
    //base64data = Buffer.from(rests[0].claim_key).toString('base64')
    //res.send(base64data);
	    if(timeInMss - rests[0].time > 80000)
	    {
	    	console.log("Found 1 valid game instance. : " + (timeInMss - rests[0].time));
	    	next()
	    }
	    else
	    {
	    	console.log("Time too fast. : " + (timeInMss - rests[0].time));
	    	res.send("");
	    }
    }
    else
    {
    	res.send("Already claimed or player did not complete the task.");
    }
  });  
},function (req, res, next) {
   var lykaun = req.body.N2FmMjgxMWVlZjQzMmM3MmI5OTcwOTMyN2M2OWJmMjE;
   var claim_key = req.body.OGY2MzlmYTIzNmMxMzNjNmM5MTMyMjBiMzQxYzVjZDc;
   console.log("Checking if he/she is a valid member of the group.");
    var rests;
   connection.query("SELECT * FROM tbl_players WHERE lykaun = '" + lykaun + "' AND status=1", function (err, result) {
    if (err) throw err;
    if (!isEmpty(result)){
    console.log(JSON.stringify(result));
    var status = JSON.stringify(result);
    rests = JSON.parse(status);

    //base64data = Buffer.from(rests[0].claim_key).toString('base64')
    //res.send(base64data);
    console.log("Found 1 valid game instance.");
    next()
    }
    else
    {
    	res.send("Player not on whitelist of LTM.");
    }  
   });  
},function (req, res,next) {
  var lykaun = req.body.N2FmMjgxMWVlZjQzMmM3MmI5OTcwOTMyN2M2OWJmMjE;
  var claim_key = req.body.OGY2MzlmYTIzNmMxMzNjNmM5MTMyMjBiMzQxYzVjZDc;
  console.log("Updating claim key status.");
    var rests;
   connection.query("UPDATE tbl_game_instance SET status = 1 WHERE claim_key = '" + claim_key + "'", function (err, result) {
    if (err) throw err;
    if (!isEmpty(result)){
    console.log(JSON.stringify(result));
    var status = JSON.stringify(result);
    rests = JSON.parse(status);

    //base64data = Buffer.from(rests[0].claim_key).toString('base64')
    //res.send(base64data);
    console.log("Success claim. : " + claim_key);
    next()
    }
    else
    {
    	res.send("Invalid game instance.");
    }  
   });  
},function (req, res, next) {
  var lykaun = req.body.N2FmMjgxMWVlZjQzMmM3MmI5OTcwOTMyN2M2OWJmMjE;
  var claim_key = req.body.OGY2MzlmYTIzNmMxMzNjNmM5MTMyMjBiMzQxYzVjZDc; 
  setTimeout(() => {
      next()
  }, Math.floor(Math.random() * 10000) + 3000 );

},function (req, res) {
  var lykaun = req.body.N2FmMjgxMWVlZjQzMmM3MmI5OTcwOTMyN2M2OWJmMjE;
  var claim_key = req.body.OGY2MzlmYTIzNmMxMzNjNmM5MTMyMjBiMzQxYzVjZDc;
  checkUser(lykaun);
  console.log('User passed. Sending gems now.');
  res.send('Geh sibat na. haha'); 
});



function sendGem(uid){

      
	  axios({
	  method: 'post', //you can set what request you want to be
	  url: 'https://wallets.mylykaapps.com/api/v3/wallets/SendGemV2',
	  data: {
	  "amount": 20.0,
	  "device": {
	    "deviceId": deviceid,
	    "deviceImei": "",
	    "deviceModel": "Samsung Galaxy S7 edge (USA)",
	    "deviceName": "android",
	    "deviceOs": "Android R ",
	    "isEmulator": false,
	    "notificationToken": "",
	    "osVersion": "30"
	  },
	  "recipientId": uid
	  },
	   headers: {
	  'Accept': 'application/json',
	  'Authorization': 'Bearer ' + btoken,
	  'Content-Type': 'application/json; charset=UTF-8',
	  'DeviceOs': 'android',
	  'X-ClientId': deviceid,
	  'User-Agent': 'Lyka/3.6.65 (com.thingsilikeapp; build:865 Android R 30)',
	  'Accept-Encoding': 'gzip'
	  }
	})
}

function checkUser(uname){
	  axios({
	  method: 'post', //you can set what request you want to be
	  url: 'https://profiles.mylykaapps.com/api/v3/profiles/GetUser',
	  data: {
	  "type": "username",
	  "username": uname					 
	  },
	  headers: {
	  'Authorization': 'Bearer ' + btoken,
	  'Content-Type': 'application/json; charset=UTF-8',
	  'DeviceOs': 'android',
	  'X-ClientId': deviceid,
	  'User-Agent': 'Lyka/3.6.65 (com.thingsilikeapp; build:865 Android R 30)'
	  }
	}).then(function (response) {
		var lykauserinfo = response.data
    	console.log(uname + " uid: " + lykauserinfo.data.id)
    	sendGem(lykauserinfo.data.id)    	
   });
    

}

function isEmpty(value){
  return (value == null || value.length === 0);
}

function encrypt(text) {
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
 let iv = Buffer.from(text.iv, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}