import React, { useState } from 'react';
import './style.css'
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function RegistrationForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [sex, setSex] = useState('');
    const [mobile, setMobile] = useState('');
    const [idType, setIdType] = useState('');
    const [govtId, setGovtId] = useState('');
    const [email, setEmail] = useState('');
    const [guard, setGuard] = useState('');


    //cancel 
    const handleCancel = () => {
        setName('');
        setDob('');
        setSex('');
        setMobile('');
        setGovtId('');
        setEmail('');
        setGuard('');
        document.getElementById("registrationForm").reset();
    };

    //govt id 
    const handleIdTypeChange = (event) => {
        setIdType(event.target.value);
        setGovtId('');
    }

    //guardian
    const handleGuardChange = (event) => {
        setGuard(event.target.value);
       
    }
    const handleGovtIdChange = (event) => {
        setGovtId(event.target.value);

    }
    if (idType === 'Aadhar') {
        if (!govtId.match(/^\d{12}$/)) {

            return;
        }
    } else if (idType === 'PAN') {
        if (!govtId.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {

            return;
        }
    }
    return (
        <form id="registrationForm" className='form' onSubmit={handleSubmit(onSubmit, handleCancel)}>
            <div className="form-body">
                <h5><b><u>Personal Details</u></b></h5>
                {/* <br></br> */}

                <div className="username">
                    <label className="form__label" for="firstName">Name <span class="required"></span> </label>
                    <input {...register("name")} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                </div>

                <div className="DOB ">
                    <label className="form__label" for="dob">Date Of Birth Or Age <span class="required"></span></label>
                    <input className="form__label" {...register("dob")} type='text' placeholder="DD/MM/YYYY or Age in Years" />
                </div>
                <div className="sex ">
                    <label className="form__label" for="sex">Sex<span class="required"></span></label>
                    <select {...register("sex")} >
                        <option value="">Enter Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mobile">
                    <label className="form__label" for="mob">Mobile </label>
                    <input {...register("mobile")} type='phone' placeholder="Enter Mobile" />
                </div>

                <div className="gov">
                    <label className="form__label" for="gov" htmlFor="idType">Govt Id</label>
                    <select {...register("gov")} placeholder="Enter govt id" id="idType" value={idType} onChange={handleIdTypeChange}>
                        <option value="">Id Type</option>
                        <option value="aadhar">Aadhar </option>
                        <option value="pan">PAN</option>
                    </select>  &nbsp;
                    <input className="form__input" {...register("gov")} type='text' id="govtId"

                        value={govtId}
                        onChange={handleGovtIdChange}
                        placeholder={`Enter ${idType} number`} />
                </div>


                <h5><b><u>Contact Details</u></b></h5>
                {/* <br></br> */}

                <div className="guard">
                    <label className="form__label" for="guard" htmlFor="guard">Guardian details</label>
                    <select {...register("guard")} placeholder="Enter label" id="guard" value={guard} onChange={handleGuardChange}>
                        <option value="">Enter label</option>
                        <option value="mother">Mother </option>
                        <option value="father">Father</option>
                    </select>
                    &nbsp;&nbsp;
                    <input className="form__input" {...register("guard")}
                        value={guard}
                        onChange={handleGuardChange}
                        type='text'
                        placeholder={`Enter ${guard} Name`} />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input {...register("guard")} className="form__input" placeholder="Enter Email" />
                </div>
                <div className="Emergency">
                    <label className="form__label" for="emergency">Emergency Contact Number </label>
                    <input {...register("mobile")} type='phone' placeholder="Enter Emergency No." />
                </div>
                <h5><b><u>Address Details</u></b></h5>
                <div className="address">
                    <label className="form__label" for="address">Address </label>
                    <input {...register("address")} type='text' placeholder="Enter Address" />
                </div>



                {/* footer */}
                <div class="footer">
                    <button type="button" class="btn btn-outline-danger" onClick={handleCancel}>Cancel <br></br>(Esc)</button>
                    &nbsp;
                    <button type="submit" value="submit" class="btn btn-success">Register</button>
                </div>
            </div>
        </form >
    )
}
