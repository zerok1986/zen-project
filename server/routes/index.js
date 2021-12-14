const { isLoggedIn } = require("../middlewares");

module.exports = (app) => {
  app.use("/api", require("./auth.routes"));
  app.use("/api/activities", isLoggedIn, require("./activities.routes"));
  app.use("/api/users", isLoggedIn, require("./user.routes"));
  app.use("/api/reviews", isLoggedIn, require("./review.routes"));
  app.use("/api/upload", require("./upload.routes"));
};
