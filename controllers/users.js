import { v4 as uuidv4 } from 'uuid';

export const createUser = (req, res)=> {
    const user = req.body;
    

    

    users.push({...user, id: uuidv4()});
    res.send(`User with the username ${user.firstName} has been added to the database `);

}