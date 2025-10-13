import jwt from "jsonwebtoken";

// user Authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ safer than req.body
    req.user = { id: token_decode.id };

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res
      .status(401)
      .json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authUser;
