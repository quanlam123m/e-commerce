const express = require("express");
const ticketController = require("../../controllers/ticket.controller");
const ticketRouter = express.Router();

//Lấy tất cả thông tin của các vé
ticketRouter.get("/", ticketController.getTickets);
//Như trên nhưng thông qua ID của vé
ticketRouter.get("/:id", ticketController.getTicketsById);
//Tạo vé mới
ticketRouter.post("/", ticketController.createTicket);

module.exports = ticketRouter;
