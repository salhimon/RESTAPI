// models/User.js

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Définition du schéma utilisateur
const userSchema = new mongoose.Schema({
  Name: { 
     type: String, 
     required: true },
  Email: {
     type: String, 
     required: true,
     unique: true },
  Age: { 
     type: Number, 
     required: true }
});

// Exportation du modèle
module.exports =model('User', userSchema);