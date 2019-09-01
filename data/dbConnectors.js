import mongoose from 'mongoose';

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useMongoClient: true
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    contacts: {
        type: Array
    },
    
});

const Friends = mongoose.model('friends', friendSchema);

export default Friends;