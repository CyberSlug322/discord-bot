import mongoose from 'mongoose'
import Names from '../data/allNames.json' assert { type: 'json' }
import { MONGO_URL } from '../config.js'

const userSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        alias: String,
        points: Number,
    },
    { versionKey: false }
)

const newNameSchema = new mongoose.Schema(
    {
        all_fit: Array,
        he_names: Array,
        he_adjectives: Array,
        neutral_names: Array,
        neutral_adjectives: Array,
        she_names: Array,
        she_adjectives: Array,
        no_name: Array,
        solo_name: Array,
    },
    { versionKey: false }
)

const submissionsSchema = new mongoose.Schema(
    {
        list: Array,
    },
    { versionKey: false }
)

const addNamesSchema = new mongoose.Schema(
    {
        newname: String,
    },
    { versionKey: false }
)

const blackListSchema = new mongoose.Schema(
    {
        userId: String,
    },
    { versionKey: false }
)

export const User = mongoose.model('User', userSchema)
export const Submissions = mongoose.model('Submissions', submissionsSchema)
export const NewNames = mongoose.model('NewNames', newNameSchema)
export const BlackList = mongoose.model('BlackList', blackListSchema)
export const AddNames = mongoose.model('AddNames', addNamesSchema)

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.once('open', () => {
    console.log('mongoDB connected')
    const allNames = new NewNames({
        all_fit: Names.all_fit,
        he_names: Names.he_names,
        he_adjectives: Names.he_adjectives,
        neutral_names: Names.neutral_names,
        neutral_adjectives: Names.neutral_adjectives,
        she_names: Names.she_names,
        she_adjectives: Names.she_adjectives,
        no_name: Names.no_name,
        solo_name: Names.solo_name
    })
    allNames.save()
})
