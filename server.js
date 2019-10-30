const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//Connect to Database
connectDB();

//Initialize Middlware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Serve Static Assets in Production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build')); // Set static folder

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')));
}

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
