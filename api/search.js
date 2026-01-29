import data from "../data.json";

export default function handler(req, res) {
  const num = req.query.num;

  if (!num) {
    return res.status(400).json({
      success: false,
      message: "Please provide a number"
    });
  }

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
