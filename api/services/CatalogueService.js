module.exports = {
  getCards: function(next) {
    Card.find().exec(function(err, cards) {
      if(err) throw err;
      next(cards);
    });
  },
  addCards: function(req, res) {
    var params = req.params.all()
    Card.create({
			title: params.title,
			author: params.author,
			synopsis: params.synopsis,
			location: params.location,
			year: params.year,
			isbn: params.isbn,
			keyword: params.keyword,
			copyNumber: params.copyNumber
		}).exec(function createCB(err,created){
      if(err) throw err;
			return res.json({
				notice: 'Created user with title ' + created.title + 'and ' + created.author
      }).exec(function(err, card) {
        if(err) throw err;
        res(card);
      });
    })
  },
  removeCards: function(cardVal, next) {
    Card.destroy({value: cardVal}).exec(function(err, card) {
      if(err) throw err;
      next(card);
    });
  }
};
