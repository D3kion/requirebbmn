define([
  'underscore',
  'marionette',
  'app/model',
], function (_, Mn, Model) {
	'use strict';

	return Mn.View.extend({
    getTemplate() {
      const posts = this.model.get('posts');
      if (posts.length != 0) {
        let tpl = '<h1>Posts:</h1><hr>'
        tpl += '<ul>';
        for (let i = 0; i < posts.length; i++) {
          tpl += '<li>' + posts[i] + '</li>';
        }
        tpl += '<ul>';
        return _.template(tpl);
      }

      return _.template('<h1>No posts</h1>');
    },

    model: new Model(),

    initialize() {
      this.model.fetch({
        success: () => this.render(),
      });
    },
	});
});
