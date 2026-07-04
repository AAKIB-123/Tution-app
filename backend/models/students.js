import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    studentId: {
        type: String,
        unique: true,
        required: true 
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },  
    fatherName: {
        type: String,
        required: true, 
    },
    motherName: {
        type: String,
        required: true,
    },
    fatherMobile: {
        type: String,
        required: true, 
    },
    motherMobile: {
        type: String,
        required: true,
    },  
     studentClass: {
        type: String,
        required: true,
    },  
    admissionDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],  
        default: "active"
    }, 
    timestamp: {
        type: Date,
        default: Date.now,
    },  
     
}); 

const Student = model("student", studentSchema);

export default Student  

