const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = "8701918863:AAEPTmID2U-Z2ZGj-pUthC0RH6__VdyYbYI";
const CHAT_ID = "1879456094";

app.post("/register", async (req, res) => {
  const phone = req.body.phone;

  const message = `📱 رقم جديد:\n${phone}`;

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    res.json({ message: "تم التسجيل بنجاح ✅" });

  } catch (error) {
    res.json({ message: "حصل خطأ ❌" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});