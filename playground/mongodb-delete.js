const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB Server');

    // deleteMany

    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'})
    //     .then(result => {
    //         console.log(result);
    //     }, err => {
    //         console.log('Unable to delete many todo documents.');
    //     });

    // deleteOne

    // db.collection('Todos')
    //     .deleteOne({text: 'Eat lunch'})
    //     .then(res => {
    //         console.log(res)
    //     });

    // findOneAndDelete

    db.collection('Todos')
        .findOneAndDelete({_id: new ObjectID('5e1378d78d3c74c4b598877d')})
        .then(res => console.log(res));
    // db.close();
});