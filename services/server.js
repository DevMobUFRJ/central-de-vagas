const express = require('express')
const bodyParser = require('body-parser')

const FirebaseAuth = require('firebaseauth')



const app = express()

const firebase = new FirebaseAuth('APIKEY')

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', function(req, res) {
  res.send('TODO list API');

});

app.post('/api/signin/email', function(req,res) {

  // get e-mail
  var email = req.body.email;
  // get password
  var password = req.body.password;
  if (email && password) {
	// try to authenticate
	firebase.signInWithEmail(email,password, function(err, result){
	  if (err) {
		console.log(err);		// Debug
		res.send(err['message']);
	  } else {
		console.log(result)		// Debug
		res.send(result);
	  }
	});
  }

});

app.post('/api/signin/google', function(req, res) {
	// verify if there is a token
	var token = req.body.token
	if (token) {
		firebase.loginWithGoogle(token, function(err, result) {
	    if (err) {
	        console.log(err);
			res.send(err)
		} else {
	        console.log(result);
			res.send(result)
		}
	});
	}
});

app.post('/api/register', function(req, res) {
  	// get e-mail
  	var email = req.body.email;
  	// get password
  	var password = req.body.password;
	// verify if there is a user
  	if (email && password) {
		// try to register user
		firebase.registerWithEmail(email, password, "", function(err, result){
			if (err){
				console.log(err);		// Debug
			  	res.send(err['message']);
			} else {
			  	console.log(result);	// Debug
			  	res.send(result);
			}
		});
  	} else {
		// error mesage
		var mError = {message: "error ao autenticar!"};
		res.send(mError);
	}
});


//# run server

console.log('server on 3001');

app.listen(3001);
