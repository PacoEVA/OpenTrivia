import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import csv from "csv-parser";
import bcrypt from "bcrypt";
import mysql from "mysql2/promise";
import { Readable } from "stream";
import { mapRowToQuestion } from "./utilidades/mapRowToQuestionFN.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB máximo
  fileFilter: (req, file, cb) => {
    const allowed = ["text/csv"];
    if (allowed.includes(file.mimetype) || /\.(csv)$/i.test(file.originalname))
      cb(null, true);
    else cb(new Error("Solo CSV permitido"), false);
  },
});

app.post("/api/upload-questions", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "Archivo requerido" });

    const ext = (req.file.originalname || "").split(".").pop().toLowerCase();
    const preguntas = [];

    if (ext === "csv" || req.file.mimetype === "text/csv") {
      // Parse CSV desde buffer
      const stream = new Readable();
      stream.push(req.file.buffer);
      stream.push(null);

      await new Promise((resolve, reject) => {
        stream
          .pipe(
            csv({ separator: ",", mapHeaders: ({ header }) => header.trim() }),
          )
          .on("data", (row) => {
            const q = mapRowToQuestion(row);
            if (q) preguntas.push(q);
            // opcional: else registrar error de fila
          })
          .on("end", resolve)
          .on("error", reject);
      });
    }  else {
      return res.status(415).json({ error: "Tipo de archivo no soportado" });
    }
    return res.json({
      ok: true,
      count: preguntas.length,
      preguntas: preguntas.slice(0, 50),
    }); // limit preview
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: err.message || "Error procesando archivo" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
