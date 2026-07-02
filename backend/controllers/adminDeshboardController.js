
const adminDeshboard = async (req , res) => {
    try {
        res.status(200).json({ message: "Admin deshboard fetched successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export default adminDeshboard