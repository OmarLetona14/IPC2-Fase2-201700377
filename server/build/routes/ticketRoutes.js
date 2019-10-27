"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketController_1 = require("../controllers/ticketController");
class TicketRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ticketController_1.ticketsController.list);
        this.router.get('/:id', ticketController_1.ticketsController.getOne);
        this.router.post('/', ticketController_1.ticketsController.create);
        this.router.put('/:id', ticketController_1.ticketsController.update);
        this.router.delete('/:id', ticketController_1.ticketsController.delete);
    }
}
const ticketRoutes = new TicketRoutes();
exports.default = ticketRoutes.router;
