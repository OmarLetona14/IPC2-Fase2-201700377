import {Request,Response} from 'express';
import pool from '../database';

class MensajeController{
    public async list(req:Request, res:Response){
        await pool.query('SELECT * FROM MENSAJE', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getOne(req:Request, res:Response){
        await pool.query('SELECT * FROM MENSAJE WHERE idMensaje = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async  create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO MENSAJE set ?',[req.body]);
        console.log(res.json('{"text":"MENSAJE creado"}'));
    }

    public async delete(req:Request, res:Response){
        await pool.query('DELETE FROM MENSAJE WHERE idMensaje = ?',req.params.id, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    public async update(req:Request, res:Response){
        await pool.query('UPDATE MENSAJE SET ? WHERE idMensaje = ?',[req.body,req.params.id], function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

}
export const mensajeController = new MensajeController();