

const studentDeshboard = async (req , res) => {
    try {
        res.status(200).json({ message: "Student deshboard fetched successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export default studentDeshboard