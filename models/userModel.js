

const userSchema = new mongoose.Schema(
  {
    id: { type: Number },
    fullname: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
export default userModel;
