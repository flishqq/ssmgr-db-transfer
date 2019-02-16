module.exports = function(table) {
    table.increments('id');
    table.string('type').defaultTo('Shadowsocks');
    table.string('name');
    table.string('host');
    table.integer('port');
    table.string('password');
    table.float('scale').defaultTo(1);
    table.string('method').defaultTo('aes-256-cfb');
    table.string('comment').defaultTo('');
    table.integer('shift').defaultTo(0);
    table.string('key');
    table.string('net');
    table.integer('wgPort');
}
