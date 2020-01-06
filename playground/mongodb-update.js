const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos')
    //     .find()
    //     .toArray()
    //     .then(docs => console.log(JSON.stringify(docs, null, 2)))

    // findOneAndUpdate

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //         {_id: new ObjectID('5e13ab798d3c74c4b598877f')},
    //         {
    //             $set: {
    //                 completed: true
    //             }
    //         },
    //         {
    //             returnOriginal: false
    //         }
    //     ).then(res => console.log(JSON.stringify(res, null, 2)));

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('5e130d258d3c74c4b5988771')
        }, {
            $set: {
                name: 'Donnie'
            },
            $inc: {
                age: 5
            }
        }, {
            returnOriginal: false
        }).then(res => console.log(JSON.stringify(res, null, 2)));
        

    db.close();
});