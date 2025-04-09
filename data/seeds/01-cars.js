// STRETCH
const cars = [
    {
        vin: 'JNKCV51E03M018631', 
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual"
    },
    {
        vin: 'SCFAB22311K301756', 
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage",
    },
    {
        vin: 'JH4KA4650KC031815', 
        make: "ford",
        model: "focus",
        mileage: 15000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}