import { InferSchemaType, model, Schema } from "mongoose";

const ComicSchema: Schema = new Schema({
  id: { type: Number,  },
  digitalId: { type: Number,  },
  title: { type: String,  },
  issueNumber: { type: Number,  },
  variantDescription: { type: String,  },
  description: { type: String,  },
  modified: { type: String,  },
  isbn: { type: String,  },
  upc: { type: String,  },
  diamondCode: { type: String,  },
  ean: { type: String,  },
  issn: { type: String,  },
  format: { type: String,  },
  pageCount: { type: Number,  },
  textObjects: { type: Array,  },
  resourceURI: { type: String,  },
  urls: { type: Array,  },
  series: { type: Object,  },
  variants: { type: Array,  },
  collections: { type: Array,  },
  collectedIssues: { type: Array,  },
  dates: { type: Array,  },
  prices: { type: Array,  },
  thumbnail: { type: Object,  },
  images: { type: Array,  },
  creators: { type: Object,  },
  characters: { type: Object,  },
  stories: { type: Object,  },
  events: { type: Object,  },
});

type Comic = InferSchemaType<typeof ComicSchema>;

export default model<Comic>("Comic", ComicSchema);
