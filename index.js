const express = require("express");
const bodyParser = require("body-parser");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config/config");
const { response } = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "Mukesh" });
});

router.post("/test", (req, res, next) => {
  var response = req.body;
  // console.log(response);
  res.send("Done");
});
var transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USERNAME,
    pass: creds.PASSWORD,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var content = ``;
  var attachs = [];
  var names = [
    "Vendor Name",
    "Type of Organisation",
    "Nature of Business",
    "GST",
    "PAN",
    "Aadhar",
    "Mailing Address",
    "Registered Address",
    "MSME",
    "Company Registration No.",
    "Contact Person",
    "Contact Name",
    "Designation",
    "Email",
    "Website",
    "Bank Name",
    "Branch Name",
    "Branch Address",
    "Beneficiary Name",
    "Account Number",
    "IFSC Code",
    "Payment Method",
    "Finance Contact Person",
    "Finance Contact No.",
    "Authorised Signatory Name",
    "Designation",
  ];
  for (var index in Object.keys(req.body)) {
    if (index > 25) {
      attachs.push({
        filename: `${Object.keys(req.body)[index]}`,
        contentType: "image/jpeg",
        content: new Buffer.from(
          req.body[[Object.keys(req.body)[index]]].split("base64,")[1],
          "base64"
        ),
      });
    } else {
      content += `<b>${names[index]}</b>  :  ${
        req.body[Object.keys(req.body)[index]]
      }<br>`;
    }
  }
  // console.log(content, "XXXXX");
  // var file1 = req.body.file1;

  // console.log(req.body.name);
  // var content = `name: ${name} \n email: ${email} \n message: ${message}, ${file} `;

  var mail = {
    from: "name",
    to: "b150040cs@nitsikkim.ac.in", // Change to email address that you want to receive messages on
    subject: "Vincular-New Message from Contact Form",
    html: content,
    attachments: attachs,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
