import Layout from "../components/Layout";
import Planungsablauf  from "../components/dashboard/Planungsablauf";
import Umrechner       from "../components/dashboard/Umrechner";
import Regelwerke      from "../components/dashboard/Regelwerke";
import Lexikon         from "../components/dashboard/Lexikon";
import DINFormate      from "../components/dashboard/DINFormate";
import Bauteile        from "../components/dashboard/Bauteile";
import Details         from "../components/dashboard/Details";
import Barrierefreiheit from "../components/dashboard/Barrierefreiheit";

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard-page">

        {/* ── PLANUNGSABLAUF ── */}
        <Planungsablauf />

        {/* ── DASHBOARD GRID ── */}
        <div className="dash-outer-box" style={{ marginTop: 32 }}>
          <h2 className="dash-section-label">Dashboard</h2>

          <div className="dash-grid">
            <Umrechner />
            <Regelwerke />
            <Lexikon />
            <DINFormate />
            <Bauteile />
            <Details />
            <Barrierefreiheit />
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;
