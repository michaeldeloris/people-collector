import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let People = new Schema({

    id: {
        type: String,
    },

    name: {
        type: String,
    },

    resume: {
        type: String,
    }
});

export default mongoose.model('People', People);