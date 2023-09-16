import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },

    lastName: {
      type: String,
      required: [true, "Please provide a last name"],
    },

    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "please provide a valid email",
      ],
    },
    password: {
      type: String,
      minLength: [6, "Please provide a password with min length 6"],
      required: [true, "Please provide a password"],
      select: false,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
    },

    city: {
      type: String,
      required: [true, "Please provide a city"],
    },

    country: {
      type: String,
      required: [true, "Please provide a country"],
    },

    address: {
      type: String,
      minLength: [25, "Please provide a password with min length 6"],
    },

    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

  const payload = {
    id: this._id,
    name: this.name,
    lastName: this.lastName,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  return token;
};

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

export default mongoose.model("User", UserSchema);

