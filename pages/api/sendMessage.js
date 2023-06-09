import twilio from "twilio";

export default function sendMessage(req, res) {
  const accountSid = "ACd04fd1b48f0836213582b99f044bdc09";
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);
  const { phone, message } = req.body;
  client.messages
    .create({
      body: "New Order Received",
      from: "+18775896927",
      to: "+16692907925",
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}
