module.exports = (app) => {
  app.use("/api", require("./auth.routes"));
  app.use("/api/activities", require("./activities.routes"));
  app.use("/api/users", require("./user.routes"));
  app.use("/api/reviews", require("./review.routes"));
  app.use("/api/upload", require("./upload.routes"));
};
