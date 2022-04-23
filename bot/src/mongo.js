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

const newNameSchema = new mongoose.Schema({
  all_fit: Array,
  he_names: Array,
  he_adjectives: Array,
  neutral_names: Array,
  neutral_adjectives: Array,
  she_names: Array,
  she_adjectives: Array
}, { versionKey: false });

const aliasSchema = new mongoose.Schema({
  common: Array,
  rare: Array,
  epic: Array,
  legendary: Array
}, { versionKey: false });

const submissionsSchema = new mongoose.Schema({
  list: Array
}, {versionKey: false});

const User = mongoose.model('User', userSchema );
//const Names = mongoose.model('Names', nameSchema );
//const Aliases = mongoose.model('Aliases', aliasSchema );
const Submissions = mongoose.model("Submissions", submissionsSchema);
const NewNames = mongoose.model('NewNames', newNameSchema );

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('mongoDB connected')
})




module.exports = {User, Submissions, NewNames}


  
