const axios = require("axios");
const { Country, Activity } = require("../database");

const getCountries = async () => {
  try {
    const data = (await axios.get("https://restcountries.com/v3.1/all")).data;

    await Promise.all(
      data?.map(async (country) => {
        return await Country.findOrCreate({
          where: {
            alpha_code: country.cca3,
          },
          defaults: {
            alpha_code: country.cca3,
            name: country.name.common,
            capital: country.capital ? country.capital[0] : "Capital not found",
            flag: country.flags.png,
            area: country.area,
            subregion: country.subregion
              ? country.subregion
              : "Subregion not found",
            continent: country.continents[0],
            population: country.population,
          },
        });
      })
    );

    const results = await Country.findAll({
      include: [{ model: Activity, through: { attributes: [] } }],
    });
    return results;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCountries };
