import student from '../models/students.js'

const checkDuplicate = (req, res, next) => {   
    const { studentId } = req.body;
    const existingUser = student.findOne({ studentId });
    if (!existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

}   



export default checkDuplicate