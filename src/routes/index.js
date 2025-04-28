const { readdirSync } = require("fs");
const { Router } = require("express");
const router = Router();

const PATH_ROUTER = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

readdirSync(PATH_ROUTER).filter((file) => {
  const rute = removeExtension(file);
  if (rute !== "index") {
    router.use(`/${rute}`, require(`./${file}`));
  }
});

module.exports = router;
