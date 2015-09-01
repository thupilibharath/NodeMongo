/**
 * Created by Bharath on 7/31/15.
 */

var arguments = process.argv.splice(2);
var httpProxy = require('http-proxy');

//
// Addresses to use in the round robin proxy
//
var addresses = [
    {
        host: 'localhost',
        port: 7001
    },
    {
        host: 'localhost',
        port: 7002
    },
    {
        host: 'localhost',
        port: 7003
    }
];

var i = 0;
httpProxy.createServer(function (req, res, proxy) {
    proxy.proxyRequest(req, res, addresses[i]);

    i = 1
}).listen(arguments[0] || 8000);