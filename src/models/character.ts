
import {InferSchemaType, model, Schema } from 'mongoose';

const ThumbnailSchema = new Schema({
  path: String,
  extension: String,
});

const ItemSchema = new Schema({
  resourceURI: String,
  name: String,
});

const CollectionSchema = new Schema({
  available: Number,
  collectionURI: String,
  items: [ItemSchema],
  returned: Number,
});

const UrlSchema = new Schema({
  type: String,
  url: String,
});

const CharacterSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  modified: String,
  thumbnail: ThumbnailSchema,
  resourceURI: String,
  comics: CollectionSchema,
  series: CollectionSchema,
  stories: {
    available: Number,
    collectionURI: String,
    items: [
      {
        resourceURI: String,
        name: String,
        // type: String,
      },
    ],
    returned: Number,
  },
  events: CollectionSchema,
  urls: [UrlSchema],
});


type Character = InferSchemaType<typeof CharacterSchema>


export default model<Character>("Character", CharacterSchema)