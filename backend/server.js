import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import People from './models/people';
import { error } from 'util';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err) => {
    if (err) { throw err; }
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongoDB database connection etablished');
});

router.route('/peoples').get((req, res) => {

    console.log('/peoples');
    People.find((err, peoples) => {
        if (err) {
            console.log(err);
        } else {
            res.json(peoples);
        }
    })
});

router.route('/peoples/add').post((req, res) => {

    let people = new People(req.params['id']['name']['resume']);
    people.save()
        .then(people => {
            res.status(200).json({ 'people': 'Added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        })
});

router.route('/peoples/delete').post((req, res) => {
    People.findByIdAndRemove({ _id: req.params.id }, (err, people) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    });
})

app.use('/', router)

app.listen(4000, () => console.log("Express erver running on port 4000"));
