/**
 * CardController
 *
 * @description :: Server-side logic for managing Cards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   getCards: function(req, res) {
     CatalogueService.getCards(function(cards) {
         res.json(cards);
     });
   },
	 addCards: function(req, res) {
		var cardVal = (req.body.value) ? req.body.value : undefined
		CatalogueService.addCard(cardVal, function(success) {
		res.json(success);
	});
},
	removeCards: function(req, res) {
	 var cardVal = (req.body.value) ? req.body.value : undefined
		CatalogueService.removeCard(cardVal, function(success) {
				res.json(success);
		});
	}
};
//
// 	create: function(req, res){
// 		var params = req.params.all()
// 		Card.create({
// 			title: params.title,
// 			author: params.author,
// 			synopsis: params.synopsis,
// 			location: params.location,
// 			year: params.year,
// 			isbn: params.isbn,
// 			keyword: params.keyword,
// 			copyNumber: params.copyNumber
// 		}).exec(function createCB(err,created){
// 			return res.json({
// 				notice: 'Created user with title ' + created.title + 'and ' + created.author
// 			});
// 		});
// 	}
//
//
// }
