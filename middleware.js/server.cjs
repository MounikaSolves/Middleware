const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();


// 1. THIRD-PARTY MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());


// 2. BUILT-IN MIDDLEWARE
app.use(express.json());


// Patient data
let patients = [
    {
        id: 1,
        name: "Ravi",
        age: 65,
        disease: "Diabetes"
    },
    {
        id: 2,
        name: "Sita",
        age: 70,
        disease: "Blood Pressure"
    }
];


// 3. APPLICATION-LEVEL MIDDLEWARE
app.use((req, res, next) => {
    console.log("Application middleware executed");
    next();
});


// 4. ROUTE-SPECIFIC MIDDLEWARE
function checkPatient(req, res, next) {
    console.log("Patient route middleware executed");
    next();
}


// 5. POST - CREATE PATIENT
app.post("/patients", checkPatient, (req, res) => {

    const patient = {
        id: patients.length + 1,
        name: req.body.name,
        age: req.body.age,
        disease: req.body.disease
    };

    patients.push(patient);

    res.status(201).json(patient);
});


// 6. GET - READ PATIENTS
app.get("/patients", checkPatient, (req, res) => {

    res.json(patients);
});


// 7. PUT - UPDATE PATIENT
app.put("/patients/:id", checkPatient, (req, res) => {

    const id = parseInt(req.params.id);

    const patient = patients.find(p => p.id === id);

    if (!patient) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }

    patient.name = req.body.name;
    patient.age = req.body.age;
    patient.disease = req.body.disease;

    res.json(patient);
});


// 8. DELETE - DELETE PATIENT
app.delete("/patients/:id", checkPatient, (req, res) => {

    const id = parseInt(req.params.id);

    const index = patients.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Patient not found"
        });
    }

    const deletedPatient = patients.splice(index, 1);

    res.json({
        message: "Patient deleted",
        patient: deletedPatient[0]
    });
});


// 9. ERROR-HANDLING MIDDLEWARE
app.use((err, req, res, next) => {

    console.log(err.message);

    res.status(500).json({
        message: "Something went wrong"
    });
});


// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});