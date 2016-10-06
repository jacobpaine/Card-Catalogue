module.exports = {
  getCards: function(next) {
    Card.find().exec(function(err, cards) {
      // if(err) throw err;
      next(cards);
    });
  },

  findCard: function(options, done) {
    Card.findOne({
      id: options.id
    }).exec(function (err, card) {
      // If an unexpected error occurred...
      if (err) { return done(err); }
      // Otherwise, it worked!
      return done(card);
    });
  },

  addCards: function(cardVal, next) {
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
    Card.destroy({id: cardVal.id}).exec(function (err){
      if(err) throw err;
    });
  }
}
