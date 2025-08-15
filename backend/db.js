const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("MERN", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate()
  .then(() => console.log("✅ PostgreSQL connected"))
  .catch((err) => console.error("❌ Error connecting to DB:", err));

module.exports = sequelize;
