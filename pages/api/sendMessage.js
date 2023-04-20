import twilio from 'twilio';

export default function sendMessage(req, res) {
const accountSid = "ACa07455b12562d4c2c48aa581f867cf6b";
const authToken = "b58d69ee7ad46d66eca58574c48d04e9";
const client = require("twilio")(accountSid, authToken);
const { phone, message } = req.body;
client.messages
  .create({
    body: "New Order Received",
    from: "+15075933721",
    to: "+918554813774",
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
  
