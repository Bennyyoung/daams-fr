import React, { useState, useEffect, FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

interface Props {

}

const ApplicantsUploadDocuments: FC<Props> = () => {

 const { register, handleSubmit } = useForm();

 const onSubmit = async (data: any) => {
  const formData = new FormData();
  formData.append("file", data.file[0]);

  const res = await fetch("http://localhost:5000/upload-file", {
   method: "POST",
   body: formData,
  }).then((res) => res.json());
  alert(JSON.stringify(`${res.message}, status: ${res.status}`));
 };
 return (
  <div className="upload-documents">

   <div className="upload-left">
    <form onSubmit={handleSubmit(onSubmit)}>
     <p>Signed Decagon Participation Agreement?</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />
     <p>NYSC Certificate/Exemption Certificate ( Original and two photocopies)</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />
     <p>University certificate/statement of results ( Original and two photocopies )</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />
     <p> Photocopy of Valid ID Card i.e either of these: Driver license, NIN, International Passport, Permanent voters card. (It must not be expired)</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />
     <p>Decagon Admission Letter</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />
     <p>Reference letter for loan processing</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />


     <p>Loan Application Letter</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />
     <p>Signed Guarantor's Notarized Statement of net worth with a passport photograph attached (Original i.e physically signed copy) </p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />

     <p>All pages of the Signed Personal guarantee and Indemnity form (Original i.e physically signed copy)</p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />
     <p>Photocopy of Guarantor's Valid ID (i.e either of these: Drivers license, NIN, International Passport, Permanent voters card) </p>
     <input required placeholder="Signed Decagon Participation Agreement" type="file" {...register("file")} />

     <input required type="submit" />
    </form>

   </div>

   <div className="upload-right">
    <p style={{ paddingLeft: '5rem' }}>
     Other Form Links
    </p>

    <p>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1ImgY_zyIYV6hsyju0mqRjxLcX-nyq2doIfZXNwrBE9ubPg/viewform">Sterling bank account details</a>

    </p>

    <p>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSegbsf-HOMXIIJEvGiZklT0g-hhhujBtR8vuO0850WLfBsWeg/viewform">Sterling Bank Loan Application Documents</a>

    </p>
   </div>


  </div>
 )
}

export default ApplicantsUploadDocuments