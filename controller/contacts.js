const mongodb = require('../data/database');
const { ObjectId }  = require('mongodb');

const getAll = async (req, res) => {
  try {
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('❌ Error fetching data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const db = mongodb.getDatabase(); 
  const result = await db.collection('contacts').find({_id:userId});
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts[0]);
  }).catch((err) => {
    console.error('❌ Error fetching data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  });
}


module.exports= {getAll, getSingle}
