module.exports = function(table) {
  table.increments('id').primary();
  table.integer('accountId');
  table.bigInteger('flow');
  table.bigInteger('createTime');
}
