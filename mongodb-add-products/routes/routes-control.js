const routes = require('express').Router();
var multer = require('multer');
var bcrypt = require('bcrypt-nodejs');

const db = require('../db/db');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage });

//varaibales
var email, path, address, country, name, prodName, prodImg, prodDescrip, product = "";
/*app.get('/',function(req,res){
	res.render('index');
})*/
routes.get('/profile',function(req,res){
	res.render('profile', {name:name,email:email,path:path, address:address, country:country, product: product /*prodName:prodName, prodImg:prodImg, prodDescrip:prodDescrip*/ });
})
routes.get('/signup',function(req,res){
	res.render('signup');
})
routes.get('/login',function(req,res){
	res.render('login', {err : ''});
})
routes.get('/logout',function(req,res,next){
  user = '';
  res.redirect('login');
});

routes.post('/signup',upload.single('avatar'),function(req,res,next){
	pAss = req.body.pass;
	address = req.body.address;
	country = req.body.country;
	bcrypt.hash(pAss, null, null, function(err, hash) {
		if(err) return next(err);
   		 db.collection.insert([{
			  /*_id: id,*/
			  name : req.body.fname,
			  email : req.body.email,
			  pass : hash,
			  address : req.body.address,
			  country : req.body.country,
			  gender :req.body.option,
			  profile :req.file.path
			}]).catch((err) => {
			  console.log('The error is: ' + err);
			}).then(() => {
			  res.redirect('/login');
			})
	});
});
routes.post('/profile',upload.single('prodimg'),function(req,res, next){
	product = "";
	db.collection.findOneAndUpdate({email: email},{ $push : {
			product : {
				prodName : req.body.prodname,
				prodImg : req.file.path,
				prodDescrip : req.body.descrip	
			}
		}
	},function(err, docs) {
		if(err) return next(err);
		product = docs.product;
		/*prodImg = docs.product.prodImg;
		prodDescrip = docs.product.prodDescrip;*/
	})
	.catch ((err) => {
		console.log('The error is: ' + err);
	}).then(() => {
			  res.redirect('/profile');
			})
})
routes.post('/login',function(req,res,next){
	db.collection.findOne({email : req.body.email}).then((docs) => {
		bcrypt.compare(req.body.pass, docs.pass, function(err, response) {
			if(err) return next(err);
			if (response == true) {
				email = req.body.email;
				name = docs.name
				path = docs.profile;
				address = docs.address;
				country = docs.country;
				res.redirect('/profile');
			}
			else {
				res.render('login', {err :'Email or Password is incorrect'});
			}
		});
	}).catch((err) => {
		console.log('the error is ' + err);
		res.render('login', {err : "username doesn't exist"})
	});
});

module.exports = routes;