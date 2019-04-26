define([
  'underscore',
  'marionette',
  'app/model',
], function (_, Mn, Model) {
	'use strict';

	return Mn.View.extend({
    getTemplate() {
      return _.template('<h1>Hello, ' + this.model.get('name') + '!</h1>');
    },

    model: new Model({name: 'User' + _.random(1000, 9999)}),
	});
});
