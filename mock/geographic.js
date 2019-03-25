const city = require('./geographic/city');
const province = require('./geographic/province');

function getProvince(ctx) {
  ctx.body = province;
}

function getCity(ctx) {
  ctx.body = city[ctx.query.province];
}

module.exports = {
  'GET /api/geographic/province': getProvince,
  'GET /api/geographic/city/:province': getCity,
};
