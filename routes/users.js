import express from 'express';


import { createUser } from '../controllers/users.js';
const router = express.Router();


let users = [
]
//all routes are starting with /users
router.get('/', (req, res) => {
    res.send(users);
    
});


router.post('/', createUser);

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id', (req, res)=> {
    const {id} = req.params;

    users = users.filter((user) => user.id != id)

    res.send(`User with the id ${id} deleted from the databse`)

})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    

    const user = users.find((user) => user.id === id);
    if (firstName) {
        user.firstName = firstName
    }
    if (lastName) {
        user.lastName = lastName
    }

    if (age) {
        user.age = age
    }
    res.send(`User with the id ${id} has been updated`)
})
export default router