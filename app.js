//1 导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
//2 配置包
const app = express();
//3 路由配置
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

//4 配置端口
app.listen(12345,()=>{
	console.log('running--------');
})