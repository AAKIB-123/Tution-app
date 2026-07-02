
 const profile = async (req , res) => {
    try {
        res.status(200).json({ message: "Profile fetched successfully", user: req.user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
 }

 export default profile