const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = async (car) => {
  const [id] = await db('cars').insert(car)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create
}