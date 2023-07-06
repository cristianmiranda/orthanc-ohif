const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = {
  name: "authenticator",
  port: 8200,
  host: "0.0.0.0",
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!!");
});

app.post("/tokens/validate", (req, res) => {
  const orthancId = req.body["orthanc-id"];
  const tokenKey = req.body["token-key"];
  const tokenValue = req.body["token-value"];
  const uri = req.body["uri"];

  console.log("-------------------");
  console.log(`uri: ${uri}`);
  console.log(`orthanc-id: ${orthancId}`);
  console.log(`token-key: ${tokenKey}`);
  console.log(`token-value: ${tokenValue}`);

  if (tokenKey === "auth-token" && isValid(tokenValue)) {
    grant(res, true, 1);
  } else if (
    tokenKey === "Referer" &&
    isValid(new URLSearchParams(new URL(tokenValue).search).get("auth-token"))
  ) {
    grant(res, true, 1);
  } else {
    grant(res, false, 0);
  }
});

app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error("Internal Server Error");
  }

  console.log(`${config.name} running on ${config.host}:${config.port}`);
});

function grant(res, granted, validity) {
  if (granted) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
  res.status(200).send({
    granted: granted,
    validity: validity,
  });
}

function isValid(token) {
  console.log(`Checking token...: ${token}`);
  return true; // token === "1234567890";
}
