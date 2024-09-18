const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb+srv://saurabhdangi03:TWblMYAGWlsIkYDY@cluster0.x5gvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Mongoose schema and model
const vehicleSchema = new mongoose.Schema({
  vehicleType: String,
  ticketId: String,
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// API to get all parked vehicles
app.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// API to park a vehicle
app.post("/park", async (req, res) => {
  const { vehicleType, ticketId } = req.body;

  try {
    const newVehicle = new Vehicle({ vehicleType, ticketId });
    await newVehicle.save();
    res.json(newVehicle);
  } catch (error) {
    res.status(500).send("Error parking vehicle");
  }
});

// API to unpark a vehicle
app.post("/unpark", async (req, res) => {
  const { ticketId } = req.body;

  try {
    const vehicle = await Vehicle.findOneAndDelete({ ticketId });
    if (vehicle) {
      res.json({ message: "Vehicle unparked successfully", vehicle });
    } else {
      res.status(404).json({ message: "Ticket ID not found" });
    }
  } catch (error) {
    res.status(500).send("Error unparking vehicle");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
