const express = require('express');
const fileUpload = require('express-fileupload');
const chalk = require('chalk');

const app = express();

app.use(fileUpload());

// Upload file route
app.get('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ message: 'No file uploaded' }); // bad request
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err); // server error
    }

    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
    });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is running on port ${chalk.greenBright(port)}`)
);
