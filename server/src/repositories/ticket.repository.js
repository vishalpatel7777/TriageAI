import prisma from "../config/prisma.js";

export const createTicket = async (ticketData) => {
  return await prisma.ticket.create({
    data: ticketData,
  });
};

export const getAllTickets = async () => {
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTicketById = async (id) => {
  return await prisma.ticket.findUnique({
    where: { id },
  });
};