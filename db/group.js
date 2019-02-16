module.exports = function(table) {
  table.increments('id');
  table.string('name');
  table.string('comment');
  table.integer('showNotice').defaultTo(1);
  table.string('order');
  table.integer('multiAccount').defaultTo(0);
}
