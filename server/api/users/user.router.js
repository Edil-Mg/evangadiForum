const router = require("express").Router();
const { createUser } = require("./user.controller");
// const express = require("express");

router.post("/", createUser);

module.exports = router;
