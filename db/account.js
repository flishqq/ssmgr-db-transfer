module.exports = function(table) {
  table.integer('port').unique();
  table.string('password');
};
