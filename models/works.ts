import { Schema, model, models } from 'mongoose';

const WorksSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  descreption: {
    type: String,
    required: [true, 'Descreption is required.'],
  },
  exhibitions:{
    type: String,
    required: [true, 'Exhibitions is required.'],
  },
  image:{
    type: String,
    required: [true, 'Image is required.'],
  },
});

const Works = models.Works || model('Works', WorksSchema);

export default Works;