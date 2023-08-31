const express = require("express");

const Router = express.Router();

const { hotelController } = require("../controllers");

Router.get("/search", hotelController.search);
Router.get("/list", hotelController.hotelList);
Router.get("/details/:id", hotelController.hotelDetail);

module.exports = Router;
