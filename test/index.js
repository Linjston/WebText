const http = require('http');
const path = require('path');
const ss = require('./staticServer.js');
const url = require('url');


// let server = http.createServer((req,res)=>{
// 	ss.staticServer(req,res,__dirname);
// }).listen(3000,()=>{
// 	console.log('running...');
// });


// let server = http.createServer((req,res)=>{
// 	let obj = url.parse(req.url,true);
// 	console.log(obj);
// }).listen(3000,()=>{
// 	console.log('running...');
// });



