const path = require('path');
const fs = require('fs');
const mine = require('./mine.json');

exports.staticServer = (req,res,root)=>{
	fs.readFile(path.join(root,req.url),(err,data)=>{
		if(err){
			res.writeHead(404,{
				'Content-Type':"text/plain;charset=utf8"
			});
			res.end("页面丢失了，找不到！");
		}else{
			var rtype = 'text/html';
			var ext = path.extname(req.url);
			if(mine[ext]){
				rtype = mine[ext];
			}
			if(rtype.startsWith('text')){
				rtype +='charset=utf8';
			}
			res.writeHead(200,{
				'Content-Type':rtype
			});
			res.end(data);
		}
	})
}