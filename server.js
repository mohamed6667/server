const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

// مهم جدًا عشان CORS
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// 🔴 حط التوكن والايدي بتوعك هنا
const TOKEN = "8701918863:AAEPTmID2U-Z2ZGj-pUthC0RH6__VdyYbYI";
const CHAT_ID = "1879456094";

// endpoint
app.post("/register", async (req, res) => {
  const { phone } = req.body;

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `📞 رقم جديد: ${phone}`
      })
    });

    res.json({ message: "تم التسجيل بنجاح" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
});

app.get("/", (req, res) => {
  res.send("Server شغال 🔥");
});

app.listen(3000, () => {
  console.log("Server شغال");
});