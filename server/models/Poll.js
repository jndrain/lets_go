var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	title: {type: String, min: 8},
	opone: {type: String, min: 3},
	optwo: {type: String, min: 3},
	opthree: {type: String, min: 3},
	opfour: {type: String, min: 3},
	createdAt: {type: Date, default: Date.now},
	asker: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('Poll', PollSchema)