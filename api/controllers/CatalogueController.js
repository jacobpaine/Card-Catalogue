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
	//   addCards: function(req, res) {
  // 		var cardVal = (req.body.value) ? req.body.value : undefined
  //     console.log("cardVal", cardVal);
  // 		CatalogueService.addCards(cardVal, function(success) {
  // 	  });
  //   },
  //
  addCards: function(req, res) {
    console.log("req: ", req.body);
		var cardVal = (req.body) ? req.body : undefined
    CatalogueService.addCards(cardVal, function(success){
      res.status(201);
    })
  }
}


// 	 var cardVal = (req.body.value) ? req.body.value : undefined
// 		CatalogueService.removeCards(cardVal, function(success) {
// 		});
// 	}
// };
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
