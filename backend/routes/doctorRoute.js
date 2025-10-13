import express from "express";
import {
  doctorList,
  loginDoctor,
  appoitmentsDoctor,
  appoitmentComplete,
  appoitmentCancel,
  doctorDashboaord,
  updateDoctorProfile,
  doctorProfile,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appoitments", authDoctor, appoitmentsDoctor);
doctorRouter.post("/complete-appoitment", authDoctor, appoitmentComplete);
doctorRouter.post("/cancel-appoitment", authDoctor, appoitmentCancel);
doctorRouter.get("/dashboard", authDoctor, doctorDashboaord);
doctorRouter.get("/profile", authDoctor, doctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

export default doctorRouter;
