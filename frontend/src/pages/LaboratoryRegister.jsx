import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerLab } from "../api/authService";

function LaboratoryRegister() {

    const navigate = useNavigate();

    const [lab, setLab] = useState({

        labId: "",
        labName: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        licenseNumber: "",

        user: {
            username: "",
            password: "",
            role: "LAB"
        }

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "username" || name === "password") {

            setLab({

                ...lab,

                user: {
                    ...lab.user,
                    [name]: value
                }

            });

        }

        else {

            setLab({

                ...lab,

                [name]: value

            });

        }

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await registerLab(lab);

            alert(response.data);

            navigate("/login/laboratory");

        }

        catch (error) {

            alert(error.response?.data || "Registration Failed");

        }

    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Laboratory Registration
                </h2>

                <form onSubmit={handleRegister}>

                    <input
                        className="form-control mb-3"
                        placeholder="Laboratory ID"
                        name="labId"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Laboratory Name"
                        name="labName"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Owner Name"
                        name="ownerName"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Address"
                        name="address"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="City"
                        name="city"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="State"
                        name="state"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="License Number"
                        name="licenseNumber"
                        onChange={handleChange}
                    />

                    <hr/>

                    <input
                        className="form-control mb-3"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        required
                    />

                    <button className="btn btn-warning w-100">
                        Register
                    </button>

                </form>

                <p className="mt-3 text-center">

                    Already Registered?

                    <Link to="/login/laboratory">

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default LaboratoryRegister;