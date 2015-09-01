/**
 * Created by Bharath on 7/31/15.
 */
var express = require('express');
var request = require('request');
var app = express();
var count  = 0;




app.get('/', function(req, res){

    if(count = 0){
        count++;
    request('http://localhost:7001/', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            //console.log(body);
            res.send(body);
        }
    }); res.end();}

    if(count = 1){
        count++
        request('http://localhost:7002/', function (error, response, body) {
            if (!error && response.statusCode === 200) {
                //console.log(body);
                res.send(body);
            }
        });}

    if(count = 2){
        count++
        request('http://localhost:7003/', function (error, response, body) {
            if (!error && response.statusCode === 200) {
                //console.log(body);
                res.send(body);
            }
        });}

    if(count = 3){
        count = 0;
        request('http://localhost:7004/', function (error, response, body) {
            if (!error && response.statusCode === 200) {
                //console.log(body);
                res.send(body);
            }
        });}

});


/*app.use('/', function(req, res) {
    if(req.method == "GET"&& count ==0) {
        count++;
        req.pipe(request('http://localhost:7001')).pipe(res);
    }
    if(req.method == "GET"&& count ==1) {
        count++;
        req.pipe(request('http://localhost:7002')).pipe(res);
    }
    if(req.method == "GET"&& count ==2) {
        count++;
        req.pipe(request('http://localhost:7003')).pipe(res);
    }
    if(req.method == "GET"&& count ==3) {
        count = 0
        req.pipe(request('http://localhost:7004')).pipe(res);
    }
    else {
        req.pipe(request[req.method.toLowerCase()]({url: url, json: req.body})).pipe(res);
    }
});*/
app.listen(3000);
console.log('Server running on port %d', 3000);