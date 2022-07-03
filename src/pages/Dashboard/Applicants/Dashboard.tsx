import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import { ApplicantsSidebar } from "../../../components/Sidebar"

import Home from "./Home"
import UploadDocuments from "./UploadDocuments"
import Withdraw from "./Withdraw"
import { ApplicantsSignup, ApplicantsLogin } from "../../../components/auth/Applicants"

interface Props {

}

const Dashboard: FC<Props> = () => {

   return (
      <>
         {/* <Header
      /> */}
         <ApplicantsSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
         <hr />

         <section id="page-wrap">
            <Routes>
               <Route path="/applicants" element={<Home />} />
               <Route path="/applicants-signup" element={<ApplicantsSignup />} />
               <Route path="/applicants-upload-documents" element={<UploadDocuments />} />
               <Route path="/applicants-withdraw" element={<Withdraw />} />
               <Route path="/login" element={<ApplicantsLogin />} />
            </Routes>

         </section>
      </>
   )
}

export default Dashboard
