const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });
const Item = require("../models/item");

//middleware
const uploadFields = upload.fields([
  { name: 'coverImage', maxCount: 1 },
  { name: 'additionalImages', maxCount: 10 }
]);

module.exports.UploadForm = (req, res) => {
  res.render("uploadItemForm.ejs", { message: null });
};


module.exports.SubmitForm = [
  uploadFields, // This middleware processes the files

  async (req, res) => {
    try {
      const { itemName, itemType, description } = req.body;

      // Access uploaded images
      const coverImageFile = req.files.coverImage?.[0];
      const additionalImageFiles = req.files.additionalImages || [];

      if (!coverImageFile) {
        return res.status(400).send("Cover image is required");
      }

      const newItem = new Item({
        name: itemName,
        type: itemType,
        description: description,
        coverImage: coverImageFile.path, 
        additionalImages: additionalImageFiles.map(file => file.path)
      });

      await newItem.save();

      res.render("uploadItemForm.ejs", {
        message: "Item uploaded successfully!"
      });

    } catch (err) {
      console.error("Error uploading item:", err);
      res.status(500).send("An error occurred while uploading the item.");
    }
  }
];
