const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const { uniqueNotNullString } = require('./utils/types');
const { cleanObject } = require('./utils/format');

const roles = ['user', 'admin'];

const settingsSchema = Schema({
  role: { type: String, enum: roles },
  value: String,
}, { _id: false });

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  realName: uniqueNotNullString('realName'),
  email: { type: String, unique:true},
  password: {type:String, select:false},
});

userSchema.method('toJSON', cleanObject);

module.exports = model('user', userSchema);
