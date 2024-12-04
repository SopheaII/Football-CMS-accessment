import express from 'express'


import studentController from "../controllers/studentController.js";
const {createStudent,getAllStudents}= studentController;
const studentRouter = express.Router();




studentRouter.post('/create',createStudent);
studentRouter.get('/all',getAllStudents);

export default studentRouter;








