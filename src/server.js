'use strict';
console.log("STARTING BUDGET API");

const express = require('express');
const { DataTypes } = require('sequelize');
const cors = require('./middlewares/cors.middleware');
const logger = require('./middlewares/logger.middleware');
const sequelize = require('./services/db.service')

const PORT = process.env.PORT || 3000;
const app = express();

// Register middlewares
app.use(cors);
app.use(logger);

// Sync model
const Item = require('./models/item.model')(sequelize, DataTypes)
Item.sync()

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 3 }, null, 3));
})

// app.use(express.json())
// app.post('/api/items/', (req, res) => {
//   let json = req.body
//   let name = json["name"]
//   let value = json["value"]
//   let item = Item.build({ name: name, value: value })
//   item.save()
//   res.send(item)
// })

// app.get('/api/items', async (req, res) => {
//   let items = await Item.findAll();
//   res.send({
//     items: items
//   });
// });

app.listen(PORT);
console.log(`Running in port ${PORT}`);