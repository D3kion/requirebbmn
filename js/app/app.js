define([
  'marionette',
  'app/view',
], function(Mn, View) {
  'use strict';

  const App = Mn.Application.extend({
    region: '#root',

    onStart() {
      this.showView(new View());
    },
  });

  const app = new App();
  app.start();
});
