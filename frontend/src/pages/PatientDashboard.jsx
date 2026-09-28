import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-5">
                Patient Dashboard
            </h2>

            <div className="row">

                <div className="col-md-6 mb-4">

                    <div className="card p-4 shadow">

                        <h4>👤 View Profile</h4>

                        <p>View your personal information.</p>

                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/profile")}
                        >
                            Open
                        </button>

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="card p-4 shadow">

                        <h4>📋 Medical History</h4>

                        <p>View all medical records.</p>

                        <button
                            className="btn btn-success"
                            onClick={() => navigate("/medical-history")}
                        >
                            Open
                        </button>

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="card p-4 shadow">

                        <h4>🔐 Grant / Revoke Access</h4>

                        <p>Allow doctors to access your records.</p>

                        <button
                            className="btn btn-warning"
                            onClick={() => navigate("/access")}
                        >
                            Open
                        </button>

                    </div>

                </div>

                <div className="col-md-6 mb-4">

                    <div className="card p-4 shadow">

                        <h4>📜 Access Logs</h4>

                        <p>See who viewed your records.</p>

                        <button
                            className="btn btn-info"
                            onClick={() => navigate("/logs")}
                        >
                            Open
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;