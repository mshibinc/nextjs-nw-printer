// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
export default function handler(req, res) {
const { data } = req.body;

  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: 'tcp://192.168.1.250'
  });

  printer.alignCenter();
  printer.println(data);
  // await printer.printImage('./assets/olaii-logo-black.png')
  // printer.cut();
  try {
    let execute = printer.execute();
    console.error("Print done!");
  } catch (error) {
    console.log("Print failed:", error);
  }
  res.status(200).json({ name: data});
}
