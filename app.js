const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const nunjucks = require('nunjucks');


app.use(fileUpload());

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('index.njk');
});

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    let sampleFile = req.files.sampleFile;

    console.log(req.files.sampleFile);

    sampleFile.mv('./upload/' + filename, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.listen(3000, () => {
    console.log('server running');
});