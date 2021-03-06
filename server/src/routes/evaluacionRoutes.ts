import {Router} from 'express';
import {evaluacionController} from '../controllers/evaluacionController';

class EvaluacionRoutes{

    public router:Router=Router();

    constructor(){
        this.config();
    }
    
    config():void{
        
        this.router.get('/',evaluacionController.list);
        this.router.get('/:id',evaluacionController.getOne);
        this.router.post('/',evaluacionController.create);
        this.router.put('/:id',evaluacionController.update);
        this.router.delete('/:id',evaluacionController.delete);
    }
}
const evaluacionRoutes = new EvaluacionRoutes();
export default evaluacionRoutes.router;