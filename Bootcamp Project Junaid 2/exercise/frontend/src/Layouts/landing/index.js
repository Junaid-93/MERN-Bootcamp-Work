import NavBarLanding from "../../components/NavBarLanding";
import styles from './Landing.module.css';
import {Routes} from 'react-router-dom'

export default function Landing({ children }) {
  return (
    <div>
      <NavBarLanding />
      <div className={`vh-100 ${styles.gradientCustom}`}>
        <Routes>{children}</Routes>
      </div>
    </div>
  );
}
