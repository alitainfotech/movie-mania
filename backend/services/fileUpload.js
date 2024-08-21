const multer = require("multer");
const fs = require("fs");

const coverPic = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const destinationFolder = "public/images/cover";
      fs.mkdirSync(destinationFolder, { recursive: true });
      cb(null, destinationFolder);
    },
    filename: (req, file, cb) => {
      const extension = file.originalname.split(".").pop();
      const isValidFileType = isAllowedFileType(extension.toLowerCase());

      if (isValidFileType) {
        cb(null, Date.now() + "cover" + file.originalname);
      } else {
        cb(
          new Error(
            "Invalid file type. Only JPEG, JPG, and PNG files are allowed."
          )
        );
      }
    },
  }),
});

function isAllowedFileType(extension) {
  const allowedFiletypes = ["jpg", "jpeg", "png"];
  return allowedFiletypes.includes(extension);
}

module.exports = {
  coverPic,
};
