import student from '../models/students.js'
import checkDuplicate from '../validators/studentValidator.js'
import counter from '../models/counter.js';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';



const addStudent = async (req, res) => {
    const { userId, fullname, email, gender, fatherName, motherName, fatherMobile, motherMobile, studentClass, admissionDate } = req.body
    try {
        //genrate student id
        const counterData = await counter.findOneAndUpdate({ _id: "studentCounter" }, { $inc: { sequence_value: 1 } }, { returnDocument: "after" });
        const studentId = `S-${counterData.sequence_value}`;
        // genrate student password

        const tempPass = "Stud@" + Math.floor(1000 + Math.random() * 9000);

        // create user 

        const user = new User({
            name: fullname,
            email: email,
            mobile: fatherMobile,
            password: tempPass,
            role: "student"
        })

        await user.save();

        // create student

        const studentData = await student.create({ userId: user._id, studentId, fullname, email, gender, fatherName, motherName, fatherMobile, motherMobile, studentClass, admissionDate });
        res.status(200).json({ message: "Student added successfully", studentId, email, tempPass });

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

const updateStudent = async (req, res) => {
    try {
        const studentData = await student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Student updated successfully", student: studentData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const studentData = await student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Student deleted successfully", student: studentData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const studentProfile = async (req, res) => {
    try {

        res.status(200).json({ message: "Profile fetched successfully"  , student: req.user });
        student.findOne({ studentId: req.user.studentId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
export { addStudent, getStudent, getstudentByid, updateStudent, deleteStudent, studentProfile }