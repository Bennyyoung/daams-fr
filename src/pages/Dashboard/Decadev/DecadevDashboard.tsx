import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import { ApplicantsSidebar } from "../../../components/Sidebar"
import { Home, Pod, Withdraw, Scores } from "."
import { DecadevLogin } from "../../../components/auth/Decadev"

interface Props {

}

const DecadevDashboard: FC<Props> = () => {

 return (
  <>
   {/* <Header
      /> */}
   <ApplicantsSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
   <hr />

   <section id="page-wrap">
    <Routes>
     <Route path="/decadev" element={<Home />} />
     <Route path="/decadev-login" element={<DecadevLogin />} />
     <Route path="/decadev-pod" element={<Pod />} />
     <Route path="/decadev-withdraw" element={<Withdraw />} />
     <Route path="/dcadev-scores" element={<Scores />} />
    </Routes>

   </section>
  </>
 )
}

export default DecadevDashboard
