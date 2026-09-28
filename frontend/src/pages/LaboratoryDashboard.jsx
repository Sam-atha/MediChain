import { useNavigate } from "react-router-dom";

function LaboratoryDashboard() {

    const navigate = useNavigate();

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-5">
                Laboratory Dashboard
            </h2>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow p-4">

                        <h4>🧪 Lab Profile</h4>

                        <p>View Laboratory Details.</p>

                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/lab/profile")}
                        >
                            Open
                        </button>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow p-4">

                        <h4>📤 Upload Report</h4>

                        <p>Upload Laboratory Reports.</p>

                        <button
                            className="btn btn-success"
                            onClick={() => navigate("/lab/upload")}
                        >
                            Upload
                        </button>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow p-4">

                        <h4>📂 View Reports</h4>

                        <p>View Uploaded Reports.</p>

                        <button
                            className="btn btn-warning"
                            onClick={() => navigate("/lab/reports")}
                        >
                            Open
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default LaboratoryDashboard;