import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const num = req.query.num;

  if (!num) {
    return res.status(400).json({
      success: false,
      message: "Please provide a number"
    });
  }

  const filePath = path.join(process.cwd(), "data.json");
  const rawData = fs.readFileSync(filePath);
  const data = JSON.parse(rawData);

  if (data[num]) {
    return res.json({
      success: true,
      number: num,
      data: data[num]
    });
  } else {
    return res.json({
      success: false,
      message: "Number not found"
    });
  }
}
