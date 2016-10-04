/**
 * Card.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title : {
      type : 'string'
    },
    author: {
      type: 'string'
    },
    synopsis: {
      type: 'text'
    },
    location: {
      type: 'string'
    },
    year: {
      type: 'integer'
    },
    isbn: {
      type: 'string'
    },
    keyword: {
      type: 'text'
    },
    copyNumber: {
      type: 'integer'
    }
  }
};
