const mongoose = require("mongoose");
const userModels = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1682089309~exp=1682089909~hmac=31b9add6abd0c6bea66217548eb9b971fd36f3751348850b33ed39d9691a4383",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userModels);
module.exports = User;
