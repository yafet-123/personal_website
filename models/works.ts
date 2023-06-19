import { Schema, model, models } from 'mongoose';

const worksSchema = new Schema({
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

const Prompt = models.Prompt || model('Prompt', worksSchema);

export default Prompt;