const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology,
    .then(() => console.log('Connected to MongoBD'))
        .catch((err) => console.error(err));
    
    //GET all users
    app.get('/users', async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ mesage: err.message });
        }

    })
});

//POST new user
app.post('/users', async (req, res) => {
    try {
        const users = new User(req.body);
        await users.save();
        res.json(users);
    } catch (err) {
        res.status(400).json({ mesage: err.message });
    }

});

//PUT edit uer
app.put('/users/:id', async (req, res) => {
}         try {
        const user = await User.findByIdAndUpdate(req.param.id, req.body, {
            new: true 
        res.json(user);
        } catch (err) {
            res.status(404).json({ message: err.message });

        })
        
        });
   
    
//DELETE user
     app.delete('/users/:id', async (req, res) => {
        try {
        await User.findByIdAndRemove(req.param.id);
            res.json({message: 'User deleted'});
            } catch(err) {
                res.status(404).json({ message: err.message });  
       }
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log ('Server Listening on port ${port)'))
    




