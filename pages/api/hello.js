// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
export default function handler(req, res) {
const { data } = req.body;
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: `tcp://${data.ip}`,
    port:9100,
  });

  printer.alignCenter();
  printer.println(data.printText);
  // await printer.printImage('./assets/olaii-logo-black.png')
  // printer.cut();
  try {
    printer.execute();
    console.error("Print done!",data.printText);
  } catch (error) {
    console.log("Print failed:", error);
  }
  res.status(200).json({ name: data.printText});
}
