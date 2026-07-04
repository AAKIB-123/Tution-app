import student from '../models/students.js'


const addStudent = async (req , res) => {
    try {
        const { userId , fullname , email , gender ,  fatherName , motherName , fatherMobile , motherMobile,  studentClass , admissionDate, password , confirmPassword  } = req.body
        const studentData = await student.create({ userId , fullname , email , gender , fatherName , motherName , fatherMobile , motherMobile , studentClass , admissionDate, password , confirmPassword  });    
        res.status(200).json({ message: "Student added successfully", student: studentData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
export default addStudent   
