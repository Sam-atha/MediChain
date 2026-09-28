import { useNavigate } from "react-router-dom";

function DoctorDashboard() {

    const navigate = useNavigate();

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-5">
                Doctor Dashboard
            </h2>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow p-4">

                        <h4>👨‍⚕️ My Profile</h4>

                        <p>View and update your profile.</p>

                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/doctor/profile")}
                        >
                            Open
                        </button>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow p-4">

                        <h4>🔍 Search Patient</h4>

                        <p>Search patient by Email or Patient ID.</p>

                        <button
                            className="btn btn-success"
                            onClick={() => navigate("/doctor/search")}
                        >
                            Open
                        </button>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow p-4">

                        <h4>📁 Shared Records</h4>

                        <p>View records shared by patients.</p>

                        <button
                            className="btn btn-warning"
                            onClick={() => navigate("/doctor/records")}
                        >
                            Open
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DoctorDashboard;