import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerDoctor } from "../api/authService";

function DoctorRegister() {

    const navigate = useNavigate();

    const [doctor, setDoctor] = useState({

        doctorId: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        specialization: "",
        qualification: "",
        designation: "",
        hospitalName: "",
        hospitalAddress: "",
        department: "",
        experience: "",
        licenseNumber: "",

        user: {
            username: "",
            password: "",
            role: "DOCTOR"
        }

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "username" || name === "password") {

            setDoctor({

                ...doctor,

                user: {

                    ...doctor.user,

                    [name]: value

                }

            });

        }

        else {

            setDoctor({

                ...doctor,

                [name]: value

            });

        }

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await registerDoctor(doctor);

            alert(response.data);

            navigate("/login/doctor");

        }

        catch (error) {

            alert(error.response?.data || "Registration Failed");

        }

    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">

                    Doctor Registration

                </h2>

                <form onSubmit={handleRegister}>

                    <input className="form-control mb-3" placeholder="Doctor ID" name="doctorId" onChange={handleChange} required />

                    <input className="form-control mb-3" placeholder="Full Name" name="name" onChange={handleChange} required />

                    <input className="form-control mb-3" placeholder="Email" type="email" name="email" onChange={handleChange} required />

                    <input className="form-control mb-3" placeholder="Phone" name="phone" onChange={handleChange} required />

                    <input className="form-control mb-3" placeholder="Gender" name="gender" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Specialization" name="specialization" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Qualification" name="qualification" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Designation" name="designation" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Hospital Name" name="hospitalName" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Hospital Address" name="hospitalAddress" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Department" name="department" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Experience (Years)" type="number" name="experience" onChange={handleChange} />

                    <input className="form-control mb-3" placeholder="Medical License Number" name="licenseNumber" onChange={handleChange} />

                    <hr />

                    <input className="form-control mb-3" placeholder="Username" name="username" onChange={handleChange} required />

                    <input className="form-control mb-3" type="password" placeholder="Password" name="password" onChange={handleChange} required />

                    <button className="btn btn-success w-100">

                        Register

                    </button>

                </form>

                <p className="mt-3 text-center">

                    Already Registered?

                    <Link to="/login/doctor">

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default DoctorRegister;