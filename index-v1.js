exports.hey = (req, res) => {
  let message = req.query.message || "howdy";
  res.status(200).send(message);
};
