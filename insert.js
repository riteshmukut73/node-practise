const { MongoClient } = require('mongodb')
const url = "ongodb+srv://riteshmukut:Ritesh%7020@cluster0.9uekp.mongodb.net/"

const client = new mongo.client(url)

async function run() {
    try {
        await client.connect();
        const db = client.db()
            //insert
            // const myobj = [{
            //name: "john",
            //   age: "28",
            //     address: "pune"
            // }, {
            //   name: "prince",
            //     age: "30",
            //       address: "Mumbai"
            // }, {
            //   name: "max",
            //     age: "28",
            //       address: "delhi"
            // }, {
            //   name: "smith",
            //     age: "28",
            //address: "banglore"
            //}]
            //const result = await db.collection('mydatabase').find({}).toarray()
            //console.log(result);
            //console.log(result._id);
            //console.log(result.name);
            // var query = { address: "pune" }
            //const newvalue = { $set: { name: "will", address: "USA" } }
            //const result = await db.collection('mydatabase').updateone(query, newvalue).
            //console.log(result);

        const result = await db.collection('mydatabase').find().limit(3).toarray()
        console.log(result);

    } catch (error) {
        console.error(error);



    } finally {
        client.close()
    }
}