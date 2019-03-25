'use strict';

const mm = require('@ali/mm');

describe('api.test.js', () => {
  // 必须等 app.ready 后才能进行测试！
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });
  afterEach(mm.restore);

  it('should GET /api/test.json 200 no login required', async () => {
    await app.httpRequest()
      .get('/api/test.json')
      .expect(200)
      .expect({
        message: 'test api without user auth',
      });
  });
});
