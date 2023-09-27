export default function handler(req, res) {
  const name = req.query.name;
  res.setPreviewData({});
  res.status(200).json({ text: name }).end("Preveiw mode enabled");
}
