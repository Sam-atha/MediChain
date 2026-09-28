import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerAdmin } from "../api/authService";

function AdminRegister() {

    const navigate = useNavigate();

    const [admin, setAdmin] = useState({

        adminId: "",
        name: "",
        email: "",
        phone: "",

        user: {
            username: "",
            password: "",
            role: "ADMIN"
        }

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "username" || name === "password") {

            setAdmin({

                ...admin,

                user: {

                    ...admin.user,

                    [name]: value

                }

            });

        }

        else {

            setAdmin({

                ...admin,

                [name]: value

            });

        }

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await registerAdmin(admin);

            alert(response.data);

            navigate("/login/admin");

        }

        catch (error) {

            alert(error.response?.data || "Registration Failed");

        }

    };

    return (

        <div className="container mt-4">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Admin Registration
                </h2>

                <form onSubmit={handleRegister}>

                    <input
                        className="form-control mb-3"
                        placeholder="Admin ID"
                        name="adminId"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Full Name"
                        name="name"
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
                        placeholder="Phone Number"
                        name="phone"
                        onChange={handleChange}
                        required
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

                    <button className="btn btn-dark w-100">

                        Register

                    </button>

                </form>

                <p className="mt-3 text-center">

                    Already Registered?

                    <Link to="/login/admin">

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default AdminRegister;