const express= require('express');
const router = express.Router();
const User =require('../models/user');

router.post('/register' ,async(req,res) =>{
    const newuser = new User(req.body)

    try{
        const user = await newuser.save()
        res.send('User Registered Successfully')
    }
    catch(e){
        return res.status(400).json({e});
    }
})


router.post('/Login' ,async(req,res) =>{
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email:email,password:password})
        if(user){
            const temp = {
                name: user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                _id: user._id,
            }
            res.send(temp)
        }
        else{
            return res.status(400).json({message: 'Login Failed'});
        }
    }
    catch(e){
        return res.status(400).json({e});
    }
})


router.get('/getallusers',async(req,res) =>{
    try {
        const users = await User.find()
        res.send(users);
    } catch (error) {
        return res.status(400).json({error})
    }
})

module.exports = router