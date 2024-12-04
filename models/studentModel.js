
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema ({
    IDcard :{type :Number ,require :true},
    name: {type :String ,require :true},
    email :{type :String ,require :true},
    phone :{type :String ,require :true},
    classid : { type: mongoose.Schema.Types.ObjectId, ref: "class" },
    createdAt: { type: Date, default: Date.now },

},
{ timestamps: true }
);
export default mongoose.model("student", studentSchema);




