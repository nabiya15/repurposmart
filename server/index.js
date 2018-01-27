const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

//require the user model. Models has to be required befor the googleOauth configuration as order of operations matter. The statements are executed in the order the are required here. We use the models inside of the google Oauth configuration. Hence it needs to be executed before the later.
require('./models/Users');

//require Google Oauth configuration
require('./authConfig/googleOauth');

//enabling our cookie-session
app.use(
	cookieSession({
		//maxAge: 30 * 24 * 60 * 60 * 1000, //defines the max time untill our cookie expires in millisecs
		keys: [keys.cookieKey.key]
	})
);
// tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("../client/src/assets"));
app.use(express.static("../client/public"));

//import authRoutes for authentication and pass the app object to it
// the second set of parentheses (app)immediately invokes the first function that we have required here (require('./routes/authRoutes'))
require('./routes/authRoutes')(app);

// connecting to the mongoDB
const db = mongoose.connect(keys.mongoKeys.mongoURI);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log('Application running on port' + PORT);
});
