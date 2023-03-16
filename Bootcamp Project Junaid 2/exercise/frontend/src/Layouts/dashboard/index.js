import NavBarDashboard from "../../components/NavBarDashboard";
import styles from "./Dashboard.module.css";
import {Routes} from 'react-router-dom';

export default function Dashboard({ children }) {
  return (
    <div>
      <NavBarDashboard />
      <div className={`vh-100 ${styles.gradientCustom}`}>
        <Routes>{children}</Routes>
      </div>
    </div>
  );
}
