const { connection } = require("./src/database");
const server = require("./src/app");
const port = 5000;

connection.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server started on port ${port}💚`);
  });
});
