import React, { useState, useContext, FC } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "../../../components/data";
import axios from "axios"
import { useNavigate } from "react-router-dom"


interface FormValues {
  firstName: string;
  lastName: string;
  middleName: string;
  emailAddress: string;
  confirmEmailAddress: string;
  dateOfBirth: Date;
  phoneNumber: number;
  whatsappPhoneNumber: number;
  stateOfOrigin: string;
  highestQualification: string
  courseOfStudy: string;
  gradeAchieved: string;
  gender: string;
};

interface Props {

}

const Register: FC<Props> = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <h4>Tell us about yourself</h4>

      <label htmlFor="firstName">What is your First Name?</label>
      <input placeholder="Type your first name"
        {...register("firstName", { required: "This is required." })}
        id="firstName"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">What is your last name?</label>
      <input placeholder="Type your last name" {...register("lastName", { required: true, minLength: 5 })} />

      <label htmlFor="middleName">What is your middle name?</label>
      <input placeholder="Type your middle name" {...register("middleName", { required: true, minLength: 5 })} />

      <label htmlFor="emailAddress">What is your email address?</label>
      <input placeholder="Type your email" {...register("emailAddress", { required: true, minLength: 10 })} />

      <label htmlFor="confirmEmailAddress">Confirm your email address?</label>
      <input placeholder="Confirm your email" {...register("confirmEmailAddress", { required: true, minLength: 10 })} />

      <label htmlFor="gender">What is your gender?</label>
      <select {...register("gender")} id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="dateOfBirth">What is your date of birth?</label>
      <input type="date" {...register("dateOfBirth", { required: true, minLength: 10 })} />

      <label htmlFor="phoneNumber">What is your phone number?</label>
      <input
        placeholder="Type your phone number"
        type="number"
        {...register("phoneNumber", { valueAsNumber: true })}
        id="phoneNumber"
      />

      <label htmlFor="whatsappPhoneNumber">What is your phone number?</label>
      <input
        placeholder="Type your WhatsApp number"
        type="number"
        {...register("whatsappPhoneNumber", { valueAsNumber: true })}
        id="whatsappPhoneNumber"
      />

      {/* <label htmlFor="stateOfOrigin">What is your state of origin?</label>
   <input {...register("stateOfOrigin", { required: true, minLength: 10 })} /> */}

      <label htmlFor="stateOfOrigin">What is your state of origin?</label>
      <select {...register("stateOfOrigin")} id="stateOfOrigin">
        {/* {
          data.forEach((elem) => {
          <option>
            
          </option>

          })
        } */}
      </select>


      <h2>Education</h2>
      <h5>We would like some more information.</h5>

      <label htmlFor="highestQualification">What is your highest qualification?</label>
      <select {...register("highestQualification")} id="highestQualification">
        <option>Select option</option>
        <option value="PhD">PhD</option>
        <option value="Masters">Masters</option>
        <option value="Bachelors">Bachelors</option>
        <option value="HND">HND</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="courseOfStudy">Where did you graduate from?</label>
      <input placeholder="Type your Course of Study" {...register("courseOfStudy", { required: true, minLength: 10 })} />

      <label htmlFor="gradeAcheieved">Grade Achieved</label>
      <select {...register("gradeAchieved")} id="gradeAchieved">
        <option>Select option</option>
        <option value="first class">First Class</option>
        <option value="second class upper">Second Class Upper</option>
        <option value="second class lower">Second Class Lower</option>
        <option value="third class">Third Class</option>
      </select>

      <label htmlFor="gradeAcheieved">NYSC Status</label>
      <select {...register("gradeAchieved")} id="gradeAchieved">
        <option>Select option</option>
        <option value="completed">Completed</option>
        <option value="exempted">Exempted</option>
        <option value="awaiting">Awaiting Service</option>
        <option value="serving">Currently Serving</option>
      </select>

      <p style={{ color: "rgb(102, 102, 102)", fontSize: "14px", marginTop: "14px" }}>By proceeding (if you click
        Submit), you agree to Decagon's<a target="_blank" rel="noreferrer"
          href="https://decagonhq.com/privacy/" style={{ color: "rgb(52, 168, 83)" }}> Privacy Policy</a>
      </p>
      <input type="submit" />


    </form>
  )
}

export default Register