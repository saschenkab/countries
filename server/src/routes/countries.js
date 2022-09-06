const { Router } = require("express");
const { Op } = require("sequelize");
const { Country, Activity } = require("../database");
const getCountries = require("../controller/index");

const countries = Router();

countries.get("/", async (req, res) => {
  const { name } = req.query;
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

      return res.status(200).json({ success: true, data: countryByName });
    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json({ success: false, msg: "Sorry, no country by that name😔" });
    }
  }

  try {
    const countries = await getCountries();
    return res.status(200).json({ success: true, data: countries });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, msg: "Couldn't find Countries" });
  }
});

module.exports = countries;
