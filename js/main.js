requirejs.config({
  baseUrl: 'js/lib',

  paths: {
    app: '../app'
  },

  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
    },

    marionette: {
      deps: ['backbone'],
    },
  },
});

requirejs(['app/app']);
