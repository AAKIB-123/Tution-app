import student from '../models/students.js'
import checkDuplicate from '../validators/studentValidator.js'
import counter from '../models/counter.js';


const addStudent = async (req, res) => {
    try {

        const counterData = await counter.findOneAndUpdate({ _id: "studentCounter" }, { $inc: { sequence_value: 1 } }, { returnDocument: "after" });
        const studentId = `S-${counterData.sequence_value}`;

        const {  fullname, email, gender, fatherName, motherName, fatherMobile, motherMobile, studentClass, admissionDate } = req.body
        const studentData = await student.create({ studentId, fullname, email, gender, fatherName, motherName, fatherMobile, motherMobile, studentClass, admissionDate });
        res.status(200).json({ message: "Student added successfully", student: studentData });
   
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const getStudent = async (req, res) => {
    try {
        const studentData = await student.find();
        res.status(200).json({ message: "Student fetched successfully", student: studentData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const getstudentByid = async (req, res) => {
    try {
        const studentData = await student.findById(req.params.id);
        res.status(200).json({ message: "Student fetched successfully", student: studentData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export { addStudent, getStudent }