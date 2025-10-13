import jwt from "jsonwebtoken";

// doctor Authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    const dtoken =
      req.headers.dtoken || req.headers.authorization?.split(" ")[1];
    if (!dtoken) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }

    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

    // attach doctor data to request
    req.doctor = { id: token_decode.id };

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res
      .status(401)
      .json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authDoctor;
