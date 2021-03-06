const mongoose = require('mongoose') ;
const Names = require("../data/allNames.json")
const {MONGO_URL} = require('../config')

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  alias: String,
  points: Number
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

const submissionsSchema = new mongoose.Schema({
  list: Array
}, {versionKey: false});

const addNamesSchema = new mongoose.Schema({
  newname: String,
 }, { versionKey: false });

 const blackListSchema = new mongoose.Schema({
  userId: String,
 }, { versionKey: false });

const User = mongoose.model('User', userSchema );
const Submissions = mongoose.model("Submissions", submissionsSchema);
const NewNames = mongoose.model('NewNames', newNameSchema );
const BlackList = mongoose.model('BlackList', blackListSchema);
const AddNames = mongoose.model('AddNames', addNamesSchema );


mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('mongoDB connected')
  const allNames = new NewNames({
    all_fit: Names.all_fit,
    he_names: Names.he_names,
    he_adjectives: Names.he_adjectives,
    neutral_names: Names.neutral_names,
    neutral_adjectives: Names.neutral_adjectives,
    she_names: Names.she_names,
    she_adjectives: Names.she_adjectives
  })
   allNames.save();
})


module.exports = {User, Submissions, NewNames, AddNames, BlackList}


  

