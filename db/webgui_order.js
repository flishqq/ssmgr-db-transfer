module.exports = function(table) {
  table.increments('id').primary();
  table.integer('baseId').defaultTo(0);
  table.string('name');
  table.string('shortComment').defaultTo('');
  table.string('comment', 16384).defaultTo('');
  table.integer('type');
  table.integer('cycle');
  table.float('alipay');
  table.float('paypal');
  table.bigInteger('flow');
  table.bigInteger('refTime');
  table.string('server');
  table.integer('autoRemove').defaultTo(0);
  table.bigInteger('autoRemoveDelay').defaultTo(0);
  table.string('portRange').defaultTo('0');
  table.integer('multiServerFlow').defaultTo(0);
  table.integer('changeOrderType').defaultTo(0);
  table.integer('active').defaultTo(1);
}
