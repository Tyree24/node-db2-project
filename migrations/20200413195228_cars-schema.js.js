
exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.decimal('VIN').notNullable();
    tbl.text('make', 128).unique().notNullable();
    tbl.text('model', 128).unique().notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.text('engin type', 128);
    tbl.text('status', 128).unique();
  }
  )
};



exports.down = function (knex) {

};
