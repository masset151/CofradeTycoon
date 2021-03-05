const { Hermandad } = require('models');

async function getHermandadByParams(filters) {
  const Hermandades = await Hermandad.find(filters);
  if (Hermandad.length > 0) {
    return Hermandad;
  }
  throw new Error('The ansConfig with applied filters does not exist');
}

async function createHermandad(hermandad) {
  const createdHermandad = new Hermandad(hermandad);
  return createdHermandad.save();
}

module.exports = {
  createHermandad,
  getHermandadByParams,
};
