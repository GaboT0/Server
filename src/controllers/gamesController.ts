import { Request, Response } from "express"; 
import pool from '../database';

class GamesController{

    index(req: Request,res: Response){
        pool.query('Describe Objetos');

        res.json('Games');
    } 
}


 const indexController = new GamesController();
 export default indexController;