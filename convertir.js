const fs = require("fs");
const parse = require("csv-parse");

// Lee el archivo CSV
const csvData = fs.readFileSync("CORREO.csv", "utf-8");

// Parsea el archivo CSV
parse(
  csvData,
  {
    columns: true,
    delimiter: ";",
  },
  (err, data) => {
    if (err) {
      console.error("Error al analizar el archivo CSV:", err);
      return;
    }

    console.log("Datos del archivo CSV:", data);
  }
);
