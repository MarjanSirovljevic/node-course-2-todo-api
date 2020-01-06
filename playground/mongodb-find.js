const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5e10a1e12a06520464e3f464')
    // }).toArray().then(docs => {
    //     console.log(JSON.stringify(docs, null, 2));
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then(count => {
    //         console.log('Todos count:', count);
    //     }, err => {
    //         console.log('Unable to count the docs', err);
    //     })

    db.collection('Users')
        .find({
            name: 'Marjan'
        })
        .toArray()
        .then(docs => {
            console.log(JSON.stringify(docs, null, 2));
        }, err => {
            console.log('Unable to fetch users', err);
        });


    // db.close();
});