import { useNavigate } from "react-router-dom";

function AdminDashboard() {

    const navigate = useNavigate();

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-5">
                Admin Dashboard
            </h2>

            <div className="row">

                <div className="col-md-3 mb-4">

                    <div className="card shadow p-4">

                        <h5>👥 Patients</h5>

                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/admin/patients")}
                        >
                            Manage
                        </button>

                    </div>

                </div>

                <div className="col-md-3 mb-4">

                    <div className="card shadow p-4">

                        <h5>👨‍⚕️ Doctors</h5>

                        <button
                            className="btn btn-success"
                            onClick={() => navigate("/admin/doctors")}
                        >
                            Manage
                        </button>

                    </div>

                </div>

                <div className="col-md-3 mb-4">

                    <div className="card shadow p-4">

                        <h5>🧪 Laboratories</h5>

                        <button
                            className="btn btn-warning"
                            onClick={() => navigate("/admin/laboratories")}
                        >
                            Manage
                        </button>

                    </div>

                </div>

                <div className="col-md-3 mb-4">

                    <div className="card shadow p-4">

                        <h5>⛓ Blockchain</h5>

                        <button
                            className="btn btn-dark"
                            onClick={() => navigate("/admin/blockchain")}
                        >
                            Monitor
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;