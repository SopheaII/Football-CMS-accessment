import student from "../models/studentModel.js";

const createStudent = async (req, res) => {
    try {
      
      const newStudent = new studentModel({
        IDCard,
        email,
        phone,
        classID: classID,
        new: true,
      });
      await newStudent.save();
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getAllStudents = async (req, res) => {
    try {
      const student = await student.find();
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  export default {createStudent,getAllStudents}
 