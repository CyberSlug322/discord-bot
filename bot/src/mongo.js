const mongoose = require('mongoose') ;

const {MONGO_URL} = require('../config.json')

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    alias: String,
    points: Number
  }, { versionKey: false }); 

const nameSchema = new mongoose.Schema({
  common: Array,
  rare: Array,
  epic: Array,
  legendary: Array
}, { versionKey: false });

const aliasSchema = new mongoose.Schema({
  common: Array,
  rare: Array,
  epic: Array,
  legendary: Array
}, { versionKey: false });

const User = mongoose.model('User', userSchema );
const Names = mongoose.model('Names', nameSchema );
const Aliases = mongoose.model('Aliases', aliasSchema );

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('mongoDB connected')
})

module.exports = {User, Names, Aliases}


  
