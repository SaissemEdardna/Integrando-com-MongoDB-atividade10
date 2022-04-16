const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://dswa5:Hq3Smkd0osggxNaq@cluster0.ircvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);


const dbName = 'ifsp';

async function main() {
 
  await client.connect();
  console.log('Servidor Conectado!');
  const db = client.db(dbName);
  const collection = db.collection('Contatos');
  const findResult = await collection.find({}).toArray();
  console.log('Documentos encontrados:', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
