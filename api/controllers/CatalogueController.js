/**
 * CatalogueController
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

  findCard: function(req, res) {
    CatalogueService.findCard(req.params, function(card){
        res.json(card);
    });
  },

  addCards: function(req, res) {
    console.log("backend req.body", req.body);
		var cardVal = (req.body) ? req.body : undefined
    CatalogueService.addCards(cardVal, function(success){
      res.json(success);
    })
  },

  removeCards: function(req, res) {
    CatalogueService.removeCards(req.params, function(card){
      res.send("Card removed: "+ card);
    })
  }
}
