'use strict';

const Controller = require('chair').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('layout.html', {
      __context__: {
        user: {
          name: ctx.session.user.cname,
        },
      },
    });
  }
}

module.exports = HomeController;
