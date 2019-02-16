module.exports = function(table) {
  table.increments('id').primary();
  table.integer('userId').defaultTo(1);
  table.string('endpoint').unique();
  table.string('auth');
  table.string('p256dh');
}
