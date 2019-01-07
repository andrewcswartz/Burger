var orm = require("../config/orm");

var burger = {
  getAllBurgers: function(cb) {
    orm.all("burgers", function (res) {
      console.log(res);
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createBurger: function(cols, vals, cb) {
    orm.insert("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  devourBurger: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
