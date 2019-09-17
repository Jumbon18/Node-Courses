const express = require('express');
const router = new express.Router();
const User = require('../db/models/user');
const auth = require('../middleware/auth');
const {sendWelcomeEmail,sendDeleteEmail} = require('../emails/account');
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        user.avatar  = `https://api.adorable.io/avatars/70/${user.name}@adorable.png`;
        await user.save();
       // sendWelcomeEmail(user.email,user.name);
        const token = await user.generateAuthToken();

        res.status(201).send({user,token})
    } catch (e) {
        res.status(400).send(e)
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
            const token = await user.generateAuthToken();
        res.send({user,token});
    } catch (e) {
        res.status(400).send(e)
    }
});
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
});
router.post('/users/logoutAll',auth,async (req,res)=>{
    try{
        req.user.tokens=[];
        await req.user.save();
        res.status(200).send({message:"Succesful deleting all accounts"})
    }catch (e) {
        res.status(500).send(e);
    }
});
router.get('/users/me',auth, async (req, res) => {
   res.send(req.user);
})


router.patch('/users/me', auth,async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save();

        res.send(req.user);
    } catch (e) {
        res.status(400).send({error:"Smth went wrong"})
    }
})

router.delete('/users/me',auth, async (req, res) => {
    try {
        await req.user.remove();
    //    sendDeleteEmail(req.user.email,req.user.name);

        res.send(req.user);
    } catch (e) {
        res.status(500).send()
    }
});
module.exports = router;