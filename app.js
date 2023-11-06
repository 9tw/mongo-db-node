const connect = require('mongodb');
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'belajar';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi gagal!');
    }
    // console.log('Koneksi berhasil!');

    // pilih database
    const db = client.db(dbName);

    // Menambahkan 1 data
    // db.collection('mahasiswa').insertOne(
    //     {
    //         name: 'Shadow',
    //         email: 'shadowdidow@gmail.com'
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // );

    // Menambahkan banyak data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             name: 'Tiger',
    //             email: 'tiger-melony@gmail.com'
    //         },
    //         {
    //             name: 'Bella',
    //             email: 'bella-melony@gmail.com'
    //         },
    //         {
    //             name: 'Alpha',
    //             email: 'alpha-melony@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // );

    // Menampilkan semua data
    console.log(
        db
            .collection('mahasiswa')
            .find()
            .toArray((error, result) => {
                console.log(result);
            })
    );
});