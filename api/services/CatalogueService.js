module.exports = {
  getCards: function(next) {
    Card.find().exec(function(err, cards) {
      if(err) throw err;
      next(cards);
    });
  },
  addCards: function(cardVal, next) {
    console.log("cardVal: ", cardVal);
    var params = cardVal;
    Card.create({
      title: params.title,
      author: params.author,
      synopsis: params.synopsis,
      location: params.location,
      year: params.year,
      isbn: params.isbn,
      keyword: params.keyword,
      copyNumber: params.copyNumber
    }).exec(function(err, card) {
      if(err) throw err;
      next(card);
    });
  },
  removeCards: function(cardVal, next) {
    var markedForDestroy = Card.findOne(cardVal);
    Card.destroy({
      id: Card.id
    }).exec(function(err, card) {
      if(err) throw err;
      next(card);
    });
  }
};
