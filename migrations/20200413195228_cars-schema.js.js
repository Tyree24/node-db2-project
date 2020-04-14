//Using knex migrations, design and write a schema for the cars table using the specifications below.


exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.decimal('VIN').notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.text('type', 128);
    tbl.text('status', 128);
  }
  )
};



exports.down = function (knex) {

};
