const express = require("express");
const app = express();

const premiumClientsApp = require("./premium-clients");
const mediumClientsApp = require("./medium-clients");
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

app.use("/medium-clients", mediumClientsApp);
app.use("/premium-clients", premiumClientsApp);
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

module.exports = app;
