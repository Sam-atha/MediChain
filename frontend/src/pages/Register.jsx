import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Register() {

    const navigate = useNavigate();

    return (

        <div className="login-container">

            <div className="login-card">

                <h1 className="text-center mb-2">
                    MediChain
                </h1>

                <p className="text-center text-muted mb-4">
                    Blockchain Based Health Record System
                </p>

                <h4 className="text-center mb-4">
                    Register As
                </h4>

                <button
                    className="btn btn-primary w-100 mb-3"
                    onClick={() => navigate("/register/patient")}
                >
                    👤 Patient
                </button>

                <button
                    className="btn btn-success w-100 mb-3"
                    onClick={() => navigate("/register/doctor")}
                >
                    🩺 Doctor
                </button>

                <button
                    className="btn btn-warning w-100 mb-3"
                    onClick={() => navigate("/register/laboratory")}
                >
                    🧪 Laboratory
                </button>

                <button
                    className="btn btn-dark w-100 mb-4"
                    onClick={() => navigate("/register/admin")}
                >
                    🛡 Admin
                </button>

                <hr />

                <p className="text-center">
                    Already have an account?
                </p>

                <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => navigate("/")}
                >
                    Login
                </button>

            </div>

        </div>

    );

}

export default Register;