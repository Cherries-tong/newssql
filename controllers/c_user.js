const m_user = require('../models/m_user'); 
exports.showSignin =(req,res)=>{
	res.render('signin.html');
};
exports.handleSignin = (req,res)=>{
	const body = req.body;
	// console.log(body);

	m_user.checkEmail(body.email,(err,data)=>{
		// console.log(data);
		if(err){
			return res.send({
				code:500,
				message:'服务器错误'
			})
		}
		if(!data[0]){
			return res.send({
				code:1,
				message:'邮箱不存在'
			});
		}
		if(data[0].password != body.password){
			return res.send({
				code:2,
				message:'密码错误 再想想!'
			});
		}
		res.send({
			code:200,
			message:'验证通过'
		});
	});
};