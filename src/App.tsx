import { Routes, Route, Link } from "react-router-dom"
import { useContext, useState, FC } from 'react';
import { slide as Menu } from 'react-burger-menu';
import {
  BiHomeAlt,
  BiBookBookmark,
  BiLogInCircle,
  BiPaperPlane,
  BiUser,
  BiMedal,
  BiLogOutCircle
} from "react-icons/bi";
import { ApplicantsLogin, ApplicantsSignup } from "./components/auth/Applicants";
import { DecadevLogin } from "./components/auth/Decadev";
import Home  from "./pages/Dashboard/Applicants/Home";
import ApplicantsAuthContext from "./context/ApplicantsContext/ApplicantsAuthContext";
import Dashboard from "./pages/Dashboard/Decadev/DecadevDashboard";

interface Props {

}


const App: FC<Props> = () => {
  // const applicantsLoggedIn = useContext(ApplicantsAuthContext)

  return (
    <>
      <Menu>
        <p className="memu-title">Decagon</p>
        <Link className="menu-item" to="/">
          <BiHomeAlt />{" "}
          Home
        </Link>
        <Link className="menu-item" to="/applicants-signup">
          <BiLogInCircle />{" "}
          Sign up Applicants
        </Link>
        <Link className="menu-item" to="/applicants-login">
          <BiLogInCircle />{" "}
          Login Applicants
        </Link>
        <Link className="menu-item" to="/decadev-login">
          <BiBookBookmark />{" "}
          Login as Link Devadev
        </Link>
      </Menu>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/applicants-signup" element={<ApplicantsSignup />} />
        <Route path="/applicants-login" element={<ApplicantsLogin />} />
        <Route path="/decadev-login" element={<DecadevLogin />} />
        {/* {
          
          !applicantsLoggedIn && (
            <>
            {console.log(applicantsLoggedIn)}
              {
                console.log(applicantsLoggedIn)
              }

            </>

          )
        } */}

        {/* {
          !applicantsLoggedIn && (
          )
        } */}

            <>
              <Route path="/decadev-dashboard" element={<Dashboard />} />
            </>
      </Routes>
    </>
  )
}

export default App
