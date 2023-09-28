"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    // METODO GET
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield database_1.default.promise().query('SELECT * FROM tienda.articulos');
            res.json(items);
        });
    }
    // METODO GET
    getItem(req, res) {
        res.json({
            text: 'Juego ' + req.params.id
        });
    }
    // METODO POST
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO tienda.articulos set ?', [req.body]);
            res.json({
                message: 'Juego guardado'
            });
        });
    }
    // METODO DELETE
    delete(req, res) {
        res.json({
            text: 'Eliminando juego ' + req.params.id
        });
    }
    // METODO PUT
    update(req, res) {
        res.json({
            text: 'Actualizando juego ' + req.params.id
        });
    }
}
const indexController = new GamesController();
exports.default = indexController;
