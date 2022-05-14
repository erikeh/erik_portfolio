require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const portNumber = process.env.PORT || 3000;
const sourceDir = 'dist';

// redirects http to https to force SSL
// app.use(function (req, res, next) {
//   if (!req.secure) {
//     return res.redirect(['https://', req.get('Host'), req.baseUrl].join(''));
//   }
//   next();
// });
app.use(express.json());
app.use(express.static(sourceDir));

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  secure: true,
});

// certificates
// const privateKey = fs.readFileSync(process.env.private_key, 'utf8');
// const certificate = fs.readFileSync(process.env.certificate, 'utf8');
// const ca = fs.readFileSync(process.env.ca, 'utf8');

// const credentials = {
//   key: privateKey,
//   cert: certificate,
//   ca: ca,
// };

// https cert challenge. Will create auto renew so this is temporary
// app.get( '/.well-known/acme-challenge/t8sG7xg144Bu9JdQFIliePpaqFbnTQcGtGtB9TKpbcg',
//   (req, res) => {
//     res
//       .status(200)
//       .send(
//         't8sG7xg144Bu9JdQFIliePpaqFbnTQcGtGtB9TKpbcg.DrZwa_GpNdahhRomHmhzkbl35RCjX9oIpoXq3o0zk',
//       );
//   },
// );

app.post('/messageToEmail', (req, res) => {
  const { from, name, text } = req.body;
  const mailData = {
    from,
    to: process.env.email,
    subject: `Message from Portfolio site. From: ${name}`,
    text,
    html: `<h3>contact email: ${from}</h3><p>${text}</p>`,
  };
  transporter
    .sendMail(mailData)
    .then((result) => {
      res.status(200).send(result);
      console.log('success');
    })
    .catch((err) => {
      res.status(400).send(err);
      console.log('failure', err);
    });
});

// const httpsServer = https.createServer(credentials, app);

// http server listen to redirect to https
app.listen(portNumber, () => {
  console.log('http server s listening on 8080', portNumber)
});

// httpsServer.listen(portNumber, () => {
//   console.log('HTTPS Server running on port 4000');
// });

// old config for...just in case

// require('dotenv').config();
// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const portNumber = process.env.PORT || 3000;
// const sourceDir = 'dist';

// app.use(express.json());
// app.use(express.static(sourceDir));

// const transporter = nodemailer.createTransport({
//   port: 465,
//   host: 'smtp.gmail.com',
//   auth: {
//     user: process.env.email,
//     pass: process.env.password,
//   },
//   secure: true,
// });

// app.get('/test', (req, res) => {
//   res.status(200).send('test complete');
// });

// app.post('/messageToEmail', (req, res) => {
//   const { from, name, text } = req.body;
//   const mailData = {
//     from,
//     to: process.env.email,
//     subject: `Message from Portfolio site. From: ${name}`,
//     text,
//     html: `<h3>contact email: ${from}</h3><p>${text}</p>`,
//   };
//   transporter
//     .sendMail(mailData)
//     .then((result) => {
//       res.status(200).send(result);
//       console.log('success');
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//       console.log('failure', err);
//     });
// });

// app.listen(portNumber, () => {
//   console.log(`Express web server started: http://localhost:${portNumber}`);
//   console.log(`Serving content from /${sourceDir}/`);
// });

