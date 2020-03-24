	const path = require('path');
	const fs = require('fs');
//大文件流操作
// 	let spath = path.join('E:\\乱七八糟\\驱动','Audio_Conexant_Win10_64_VER8661652.zip');
// 	let dpath = path.join('C:\\Users\\帅通\\Desktop','aa.zip');

// 	let readStream = fs.createReadStream(spath);
// 	let writeStream = fs.createWriteStream(dpath);
// 	let num=0;
// 	readStream.on('data', (chunk) => {
// 	  console.log(`接收到 ${chunk.length} 个字节的数据`);
// 	  num++;
// 	  writeStream.write(chunk);
// 	});
// 	readStream.on('end', () => {
// 	  console.log('已没有数据'+num);
// 	});


//读取目录
// fs.readdir(__dirname,(err,files)=>{
// 		files.forEach((item,index)=>{
// 			fs.stat(path.join(__dirname,item),(err,stats)=>{
// 				if(stats.isFile()){
// 				    console.log(item + '文件');
// 				}
// 				else if(stats.isDirectory()){
// 				    console.log(item + '目录');
// 				}
// 			})
// 		})
// 	})


//删除目录
	// fs.mkdir(path.join(__dirname,'abc'),(err)=>{
	// 	console.log('创建成功');

	// });
	// setTimeout(()=>{
	// 	fs.rmdir(path.join(__dirname,'abc'),(err)=>{
	// 	console.log('删除成功');
	// })
	// },1000);
	

//服务器
const http = require('http');
let server = http.createServer((req,res)=>{
    	if(req.url.startsWith('/index')){
    		res.end('index');
    	}
    	else{
    		res.end('no');
    	}
    }).listen(3000);