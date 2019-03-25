'use strict';

const Controller = require('chair').Controller;

class APIController extends Controller {
  async test() {
    this.ctx.body = {
      message: 'test api without user auth',
    };
  }

  async getUser() {
    const { ctx } = this;
    const user = await ctx.bucClient.get(ctx.params.name);
    if (!user) {
      ctx.status = 404;
      ctx.body = {
        error: ctx.params.name + ' not exists',
      };
      return;
    }

    this.body = {
      user: {
        name: user.login,
        nick: user.name,
        email: user.email,
      },
    };
  }
}

module.exports = APIController;
