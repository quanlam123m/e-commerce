const multer = require('multer');
const path = require('path');

// Lưu file tạm vào local (trước khi đẩy lên GCS nếu cần)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return cb(new Error('Only images are allowed'));
    }
    cb(null, true);
  },
});

module.exports = upload;
