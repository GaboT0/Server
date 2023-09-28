import { Request, Response } from "express"; 
import pool from '../database';

class GamesController{
    // METODO GET
    public async list(req: Request,res: Response){
        const items = await pool.promise().query('SELECT * FROM tienda.articulos');
        res.json(items);
    } 
    // METODO GET
    public getItem(req: Request, res: Response){
        res.json({
            text: 'Juego ' + req.params.id 
        });
    }
    // METODO POST
    public async create(req: Request,res: Response){
        await pool.promise().query('INSERT INTO tienda.articulos set ?', [req.body]);
        res.json({
            message: 'Juego guardado'
        });
    }
    // METODO DELETE
    public delete(req: Request, res: Response){
        res.json({
            text: 'Eliminando juego '+ req.params.id
        });
    }
    // METODO PUT
    public update(req: Request, res: Response){
        res.json({
            text: 'Actualizando juego ' + req.params.id
        });
    }
}


 const indexController = new GamesController();
 export default indexController;