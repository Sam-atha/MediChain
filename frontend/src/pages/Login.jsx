import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {

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
                    Login As
                </h4>

                <button
                    className="btn btn-primary w-100 mb-3"
                    onClick={() => navigate("/login/patient")}
                >
                    👤 Patient
                </button>

                <button
                    className="btn btn-success w-100 mb-3"
                    onClick={() => navigate("/login/doctor")}
                >
                    🩺 Doctor
                </button>

                <button
                    className="btn btn-warning w-100 mb-3"
                    onClick={() => navigate("/login/laboratory")}
                >
                    🧪 Laboratory
                </button>

                <button
                    className="btn btn-dark w-100 mb-4"
                    onClick={() => navigate("/login/admin")}
                >
                    🛡 Admin
                </button>

                <hr />

                <p className="text-center">
                    Don't have an account?
                </p>

                <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => navigate("/register")}
                >
                    Register
                </button>

            </div>

        </div>

    );

}

export default Login;