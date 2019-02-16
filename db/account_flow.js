module.exports = function(table) {
  table.increments('id');
  table.integer('serverId');
  table.integer('accountId');
  table.integer('port');
  table.bigInteger('updateTime');
  table.bigInteger('checkTime');
  table.bigInteger('nextCheckTime');
  table.bigInteger('checkFlowTime').defaultTo(Date.now());
  table.bigInteger('autobanTime');
  table.bigInteger('flow').defaultTo(0);
  table.string('status').defaultTo('checked');
}
