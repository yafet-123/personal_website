import { Schema, model, models } from 'mongoose';

const exhibitionSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  descreption: {
    type: String,
    required: [true, 'Descreption is required.'],
  },
  date:{
    type: String,
    required: [true, 'Date is required.'],
  },
  image:{
    type: Array,
    default: [],
    required: [true, 'Image is required.'],
  },
});

const exhibition = models.exhibition || model('exhibition', exhibitionSchema);

export default exhibition;