module.exports = function(table) {
  table.increments('id').primary();
  table.string('orderId').unique();
  table.integer('orderType');
  table.string('amount');
  table.integer('user');
  table.integer('account');
  table.string('paypalId').unique();
  table.string('status');
  table.string('paypalData', 4096);
  table.bigInteger('createTime');
  table.bigInteger('expireTime');
}
