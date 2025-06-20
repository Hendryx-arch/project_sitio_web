import { Router } from "express";
import { MovieController } from "../controllers/movies.js";


export const moviesRouter = Router()

moviesRouter.get('/',MovieController.getAll )

moviesRouter.get('/:id', MovieController.getId)

moviesRouter.post('/',MovieController.create)

moviesRouter.delete('/:id',MovieController.delete)

moviesRouter.patch('/:id', MovieController.update)
