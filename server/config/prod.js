// file to to ignored by git 

module.exports = {
	googleKeys: {
		googleClientID:process.env.GOOGLE_CLIENT_ID,
		googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
	},

	mongoKeys :{
		mongoURI : process.env.MONGO_URI
	},

	cookieKey: {
		key: process.env.COOKIE_KEY
	}
};
