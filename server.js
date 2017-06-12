const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const Middleware = require('./controllers/Middleware');
const MessageController = require('./controllers/MessageController');
const PresenceController = require('./controllers/PresenceController');
const TrackController = require('./controllers/TrackController')

//import routes from './routes/';

mongoose.connect('mongodb://localhost:27017/terasys');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/webhook-obd2',
  Middleware.extractData,
  MessageController.saveMessageEvent,
  PresenceController.savePresenceEvent,
  TrackController.saveTrackEvent
);

app.post('/api/events/message', MessageController.retrieveMessageEvents);

app.post('/api/events/presence', PresenceController.retrievePresenceEvents);

app.post('/api/events/track', TrackController.retrieveTrackEvents);

app.all('*', (req, res) => {
  res.send('welcome to terasys web api');
});

const port = process.env.PORT || 8000;
app.set('port', port);
app.listen(port, () => console.log('server started'));

