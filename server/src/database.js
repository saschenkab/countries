require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { USER, PASSWORD, HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}/countriesapp`,
  {
    logging: false,
  }
);
const basename = path.basename(__filename);

const models = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    models.push(require(path.join(__dirname, "/models", file)));
  });

models.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: "country_activities" });
Activity.belongsToMany(Country, { through: "country_activities" });

module.exports = {
  ...sequelize.models,
  connection: sequelize,
};
