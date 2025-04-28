const handleHttpError = (res, error) => {
  console.log(error);
  res.status(500);
  res.send(error);
};

module.exports = { handleHttpError };
