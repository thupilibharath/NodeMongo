/**
 * Created by Bharath on 7/31/15.
 */
/**
 * Created by Bharath on 7/5/15.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var express = require('express');
var http = require('http'),
    httpProxy = require('http-proxy');


var options = {
    hostnameOnly: true,
    router: {
        'domainjakamaka.com': '127.0.0.1:7001/',
        'domaintwo.net': '127.0.0.1:9001',
        'domainthree.org': '127.0.0.1:9002'
    }
}

var app1 = express();

app1.use(express.static(__dirname + '/public/images/'));

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/sample';
var result1;
var count = 0
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);

        // do some work here with the database.
        var collection = db.collection('movie');

        var newmovie = {"name":"Revenge"};

        collection.insert(newmovie, function(err, result){
            if(err){
                console.log(err);
            }
            else{
                console.log("Element inserted");
            }
            //Close connection
            // db.close()
        });

        collection.find().toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                console.log('Found: All Records');
                result1 = result;
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }
        });

    }
});

app1.get('/', function (req, res) {
    count++;
    //res.sendFile('img.png');
    res.json('Found All records');
    if(process.pid){
        console.log('No of requests'+count+' Current Pid'+process.pid );}

});

app1.listen(7007);
