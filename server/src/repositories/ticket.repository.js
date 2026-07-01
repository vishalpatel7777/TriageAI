import prisma from "../config/prisma.js";

export const createTicket = async (ticketData) => {
  return prisma.ticket.create({
    data: ticketData,
  });
};

export const getAllTickets = async () => {
  return prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTicketById = async (id) => {
  return prisma.ticket.findUnique({
    where: {
      id,
    },
  });
};