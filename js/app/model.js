define([
  'backbone',
], function(Bb) {
  'use strict';
  
  return Bb.Model.extend({
    defaults: {
      posts: [],
    },

    url: 'https://my-json-server.typicode.com/d3kion/requirebbmn/posts',

    parse: function(res) {
      this.set({posts: res});
    }
  });
});
