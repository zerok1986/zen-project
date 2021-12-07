const mongoose = require("mongoose");

module.exports = {
  formatDate: (activity) => {
    let month = "" + (activity.date.getMonth() + 1);
    let day = "" + activity.date.getDate();
    let year = activity.date.getFullYear();
    let hour =activity.date.getHours()
    let mins = activity.date.getMinutes()
    
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;


    return [year, month, day, hour, mins].join("-");
  },

//   isAdmin: (user) => user?.role === "ADMIN",
//   isOwner: (user, interest) => interest.isOwner?.equals(user._id),
};
