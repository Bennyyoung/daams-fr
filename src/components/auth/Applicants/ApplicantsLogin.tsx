import React, { useState, useContext, FC } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "../../../components/data";
import axios from "axios"
import { useNavigate } from "react-router-dom"


interface FormValues {
  emailAddress: string;
  password: string
};

interface Props {

}

const ApplicantsLogin: FC<Props> = () => {
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
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Applicants Login</h1>

        <label htmlFor="emailAddress">Email </label>
        <input placeholder="Type your email"
          {...register("emailAddress", { required: "This is required." })}
          id="emailAddress"
        />
        {errors.emailAddress && <p>{errors.emailAddress.message}</p>}

        <label htmlFor="password">Password</label>
        <input placeholder="Type your password" {...register("password", { required: true, minLength: 5 })} />


        <input type="submit" />


      </form>
    </>
  )
}

export default ApplicantsLogin