import NavBarLanding from "../../components/NavBarLanding";
import styles from './Landing.module.css';
import {Routes} from 'react-router-dom'

export default function Landing({ children }) {
  return (
    <div className={`vh-100 ${styles.gradientCustom}`}>
      <NavBarLanding />
      <div >
        <Routes>{children}</Routes>
      </div>
    </div>
  );
}
