module.exports = function(table) {
  table.increments('port');
  table.integer('flow');
  table.bigInteger('time');
}
