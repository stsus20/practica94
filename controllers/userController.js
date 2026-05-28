
import {request} from 'express'; 
import User from '../models/User.js';

export const createUser = (req, res) => {
    try{
        const { name } = req.body;
        const user = User.create(name);
        res.status(201).json({
            message: 'Usuario creado',
            data: user
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

