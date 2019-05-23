export const current = (req, res) => {
  res.json(req.user);
};
