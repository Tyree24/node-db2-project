
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { 'carId': 1, 'VIN': 'JNKCA31A61T027494', 'make': 'Infiniti', 'model': 'I30', 'mileage': 2500, 'engine type': '3.0L V6 DOHC 24V', 'status': 'clean' },
        { 'carId': 2, 'VIN': '4F2YU09161KM33122', 'make': 'Mazda', 'model': 'Tribute', 'mileage': 500, 'engine type': '3.0L V6 DOHC 24V', 'status': 'clean' },
        { 'carId': 3, 'VIN': '4T4BF1FKXER340134', 'make': 'Toyota', 'model': 'Camry', 'mileage': 6000, 'engine type': '205L L4 DOHC 16V', 'status': 'salvage' }
      ]);
    });
};

//The critical information for each car is the VIN, make, model, and mileage.
//They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

//This the info mvp asked us to provide