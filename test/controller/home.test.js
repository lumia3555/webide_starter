'use strict';

const mm = require('@ali/mm');

describe('home.test.js', () => {
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });
  afterEach(mm.restore);

  it('should GET / 302 when user not login', async () => {
    await app.httpRequest()
      .get('/')
      .expect(302)
      .expect('Location', '/login?redirect=%2F');
  });

  it('should GET / 200 when user logined', async () => {
    app.mockUser();
    await app.httpRequest(app.callback())
      .get('/')
      .expect(200);
  });
});
