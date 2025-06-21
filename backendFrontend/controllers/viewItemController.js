const Item = require("../models/item.js");

module.exports.ViewItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.render("viewItems.ejs", { items });  // 👈 Pass data to EJS
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Failed to load items");
  }
};
