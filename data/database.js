const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
  if (database) {
    console.log('✅ Database is already initialized.');
    return callback(null, database);
  }

  MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client.db('project1'); 
      console.log('✅ Successfully connected to MongoDB.');
      callback(null, database);
    })
    .catch((err) => {
      console.error('❌ MongoDB connection error:', err);
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error('❌ Database not initialized.');
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase,
};