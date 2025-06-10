const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Rota para criar uma sala
app.post("/salas", async (req, res) => {
  const { nome, capacidade, tipo } = req.body;
  const novaSala = await prisma.sala.create({
    data: { nome, capacidade: Number(capacidade), tipo },
  });
  res.json(novaSala);
});

// Rota para listar salas
app.get("/salas", async (req, res) => {
  const salas = await prisma.sala.findMany();
  res.json(salas);
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
