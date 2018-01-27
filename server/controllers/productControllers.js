const db = require("../models");

module.exports = {
	findAll: function(req, res){
		db.Product
			.find(req.query)
			.sort({date : -1})
			.then(dbModel => res.json(dbModel))
			.catch(error => res.status(422).json(error));

	},
	findByCategory: function(req, res){
		db.Product
			.find({category: req.params.category})
			.sort({date: -1})
			.then(dbModel=> res.json(dbModel)).
			.catch(error => res.status(422).json(error));
	},
	create: function(req, res){
		db.Product
			.create(req.body)
			.then(dbModel =>res.json(dbModel))
			.catch(error => res.status(422).json(error));
	},
	delete: function(req, res){
		db.Product
			.findById({_id :req.params.id})
			.then(dbModel=> dbModel.remove())
			.then(dbModel=>res.json(dbModel))
			.catch(error => res.status(422).json(error));

	}
}