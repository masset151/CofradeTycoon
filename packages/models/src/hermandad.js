const { Schema, model } = require('mongoose');

const { uniqueNotNullString } = require('./utils/types');
const { cleanObject } = require('./utils/format');

const roles = ['user', 'admin'];

const settingsSchema = Schema({
  role: { type: String, enum: roles },
  value: String,
}, { _id: false });

const hermandadSchema = new Schema({
  
  hermandad_nombre: { type: String, required: true, unique: true },
  cristo: {type: String} ,
  fecha_fundacion:{type:Date, default:Date.now()},
  hermano_mayor:{type: mongoose.Schema.Types.ObjectID,ref:'User'},
  dinero: Number,
  reputacion:Number,
  password: String,
  settings: settingsSchema,
  image: { data: Buffer, contentType: String },
});
const hm = Mongoose.model('user',userSchema);
hermandadSchema.method('toJSON', cleanObject);


module.exports = model('user', hermandadSchema);