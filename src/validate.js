import Schema from "validate";

const validateImage = (val) => {
  return val.includes("image") || val === "";
};

export const postSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    required: true,
    length: { min: 2, max: 32 },
  },
  description: {
    required: true,
    length: { min: 1 },
  },
  image: {
    type: String,
    use: { validateImage },
    message: "You must choose IMAGE",
  },
});

export const validate = (post) => {
  return postSchema.validate(post);
};
