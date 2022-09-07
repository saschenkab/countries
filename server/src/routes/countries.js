const { Router } = require("express");
const getCountries = require("../controller/index");
const { Op } = require("sequelize");
const { Country, Activity } = require("../database");

const countries = Router();

countries.get("/", async (req, res) => {
  const { name } = req.query;
  const countries = await getCountries();

  if (name) {
    try {
      let countryByName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%` + name + `%`,
          },
        },
        include: { model: Activity },
      });

      return res.status(200).json({ sucess: true, data: countryByName });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        success: false,
        msg: `Couldn't find a Country by that name😔` + error,
      });
    }
  }

  try {
    let countries = await Country.findAll({ include: { model: Activity } });
    res.status(200).json({ success: true, data: countries });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      msg: `Couldn't load countries, possible error: ${error}`,
    });
  }
});

module.exports = countries;
