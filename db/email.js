module.exports = function(table) {
  table.string('to');
  table.string('subject');
  table.string('text', 16384);
  table.string('type');
  table.string('remark');
  table.string('ip');
  table.string('session');
  table.string('telegramId');
  table.bigInteger('time');
}
