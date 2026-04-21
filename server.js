const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const phone = req.body.phone;

  console.log("رقم جديد:", phone);

  // حفظ في ملف
  fs.appendFileSync("numbers.txt", phone + "\n");

  res.json({
    message: "تم التسجيل بنجاح ✅"
  });
});

app.listen(3000, () => {
  console.log("Server شغال على http://localhost:3000");
});