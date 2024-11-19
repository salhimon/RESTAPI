const express = require("express")
const User = require("../models/User")
const router1=express.Router()


// Route : Obtenir tous les utilisateurs
router1.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({msg:'user list',Userlist: users})
} catch (error) {
    res.status(400).json({ message: 'can not get user' });
  }
});

// Route : Ajouter un nouvel utilisateur
router1.post('/users', async (req, res) => {
  const { Name, Email, Age } = req.body;
  const user = new User({ Name, Email, Age });

  try {
    const newUser = await user.save();
    res.status(201).send({msg:'user added',useradded:newUser});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route : Mettre à jour un utilisateur par ID
router1.put('/users/:_id', async (req, res) => {
  try {
    const{_id}=req.params;

    const updatedUser = await User.findByIdAndUpdate({_id},{$set:{ ...req.body}}, { new: true });
    res.status(200).send({msg:'contact updated',contactupdated:updatedUser})
} catch (error) {
    res.status(400).json({ message: 'contact not updated' });
  }
});

// Route : Supprimer un utilisateur par ID
router1.delete('/users/:_id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params._id);
    res.status(200).send({ message: 'user deleted',userdeleted:User.findByIdAndDelete });
  } catch (err) {
    res.status(400).json({ message:'user not deleted'});
  }
});

module.exports= router1