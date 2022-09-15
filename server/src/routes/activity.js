const Router = require("express");
const { Activity, Country } = require("../database");
const { addActivity } = require("../controller/index");

const activity = Router();

activity.post("/add_new_activity", async (req, res) => {
  const { name, difficulty, duration, seasons, countries } = req.body;
  console.log(seasons);
  try {
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      seasons,
    });

    if (countries) {
      await newActivity.addCountries(countries);
    }

    if (newActivity) {
      res
        .status(200)
        .json({ message: "Activity added successfully", newActivity });
    } else {
      res
        .status(400)
        .json(console.error(newActivity), { message: "Activity not added" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

activity.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        as: "countries",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    return res.status(200).json({ success: true, data: activities });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      msg: `Couldn't load activities, possible error: ` + error.message,
    });
  }
});

module.exports = activity;
