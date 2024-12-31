const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllSessions = async (req, res) => {
  const parkingSession = await prisma.parkingSessions.findMany();
  res.status(200).send(parkingSession);
};

module.exportes = { getAllSessions };
