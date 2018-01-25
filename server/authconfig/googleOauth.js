// configuration for google Oauth

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


//Slightly different fashion of requiring the users model so that it does not not throw duplication error during unit testing. Sometimes model files are required in project multiple times which might make mongoose think that we are trying to load mutliple models with the same name. Hence create a User class that has the instance of User from the models
const User = mongoose.model('Users');
// serialize converts the user and converts it to an id 
passport.serializeUser((user, done) =>{
// here user is the user record from our mongodb 
	done(null, user.id);// user.id is the automatically generated by mongo
})

// passport takes in the serailized users info and coverts it into a user mongoose model
passport.deserializeUser((id, done) =>{
	User.findById(id)
		.then(user => {
			done(null, user);
		})
})

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleKeys.googleClientID,
			clientSecret: keys.googleKeys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy:true
		},
		async (accessToken, refreshToken, profile, done) => {
			//check if we already have the user in our database, save it to the database only if user does not exist in our db.
			const existingUser = await User.findOne({userId: profile.id});
			
			if (existingUser) {
				//this means we already have a record in our database with that id. hence do not save the user.
				done(null, existingUser);
			} 
	
			// there is no record with that id, therefore save it to the database
			// create new instance of User
			const newUser = await new User({ userId: profile.id }).save();
			done(null, newUser); // userId is the record of our database and profile.d comes from the profile returned by google authentication. save() saves that user to our database.

		}
	)
);
