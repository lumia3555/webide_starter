'use strict';

module.exports = function(app) {
  const { router, controller } = app;

  // RESTful APIs
  router.get('api_test', '/api/test.json', controller.api.test);
  router.get('api_user', '/api/users/:name.json', controller.api.getUser);

  // GET / => controllers/home.js
  router.get('home', '*', controller.home.index);

};
