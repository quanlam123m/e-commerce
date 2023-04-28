const { Tickets } = require("../models");

//Lấy tất cả thông tin của tất cả các vé
const getTickets = async (req, res) => {
  try {
    const cart = await Tickets.findAll();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
  }
};

//Lấy tất cả thông tin của vé theo id
const getTicketsById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json("Invalid request");
  }

  try {
    const cart = await Tickets.findByPk(id);
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(400).json({ content: "Tickets not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

//Tạo đơn hàng mới
const createTicket = async (req, res) => {
  const { userID, movie, showtime, room, seats, quantity, price, filmsId } =
    req.body;
  try {
    const ticket = await Tickets.create({
      userID,
      movie,
      showtime,
      room,
      seats,
      quantity,
      price,
      filmsId,
    });
    res.status(200, ticket.id).json({ content: "Create Ticket Successfully" });
  } catch (error) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

module.exports = {
  getTickets,
  getTicketsById,
  createTicket,
};
