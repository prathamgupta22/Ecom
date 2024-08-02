export const testContoller = (req, res) => {
  res.status(200).send({
    message: "TestRoutes",
    success: true,
  });
};
