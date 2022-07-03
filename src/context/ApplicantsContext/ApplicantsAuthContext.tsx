import React, { createContext, useEffect, useState, FC } from "react";
import axios from "axios"

interface Props {
  children: React.ReactNode
}

interface ApplicantsAuthContext {
  applicantsLoggedIn: undefined, 
  getApplicantsLoggedIn: () => Promise<void>
}

const ApplicantsAuthContext = createContext<any>(undefined);

const ApplicantsAuthContextProvider: FC<Props> = (props) => {
  const [applicantsLoggedIn, setApplicantsLoggedIn] = useState<ApplicantsAuthContext | undefined>(undefined)

  async function getApplicantsLoggedIn() {

    // console.log("Logged in data" + loggedIn);
    const applicantsLoggedInRes = await axios.get("/auth/applicants/loggedIn")
    console.log(applicantsLoggedInRes)
    setApplicantsLoggedIn(applicantsLoggedInRes.data)
  }

  useEffect(() => {
    getApplicantsLoggedIn()
  }, [])
  return (
    <ApplicantsAuthContext.Provider value={{ applicantsLoggedIn, getApplicantsLoggedIn }}>

      {props.children}
    </ApplicantsAuthContext.Provider>
  )
}

export default ApplicantsAuthContext
export { ApplicantsAuthContextProvider }