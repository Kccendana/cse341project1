const express = require('express');
const app = express();
const mongodb = require('./data/database')
const port = process.env.PORT || 3000
const contactsRoutes = require('./routes/contacts')


app.use('/', require('./routes'));
app.use('/contacts', contactsRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err)
  }else {
    app.listen(port, () => {
    console.log(`Database listening and node running on port ${port}`);
});
  }
})

