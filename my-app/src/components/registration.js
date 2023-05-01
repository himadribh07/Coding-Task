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

    //cancel 
    const handleCancel = () => {
        setName('');
        setDob('');
        setSex('');
        setMobile('');
        setGovtId('');
        document.getElementById("registrationForm").reset();
    };

    //govt id 
    const handleIdTypeChange = (event) => {
        setIdType(event.target.value);
        setGovtId('');
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
                <br></br>
                <div className="form-inline">
                    <div className="username input-group">
                        <label for="firstName">Name <span class="required"></span> </label>
                        <input {...register("name")} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="DOB input-group">
                        <label for="dob">Date Of Birth Or Age <span class="required"></span></label>
                        <input {...register("dob")} type='text' placeholder="DD/MM/YYYY or Age in Years" />
                    </div>
                    <div className="sex mr-sm-2">
                        <label className="form__label" for="sex">Sex<span class="required"></span></label>
                        <select {...register("sex")} >
                            <option value="">Enter Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mobile mr-sm-2">
                        <label className="form__label" for="dob">Mobile <span class="required"></span></label>
                        <input {...register("mobile")} type='phone' placeholder="Enter Mobile number" />
                    </div>

                    <div className="gov">
                        <label className="form__label" for="dob" htmlFor="idType">Govt Id</label>
                        <select {...register("gov")} placeholder="Enter govt id" id="idType" value={idType} onChange={handleIdTypeChange}>
                            <option value="">Id Type</option>
                            <option value="aadhar">Aadhar </option>
                            <option value="female">PAN</option>
                        </select>
                        {idType && (
                            <div>
                                <label htmlFor="govtId">Govt Issued ID:</label>
                                <input
                                    id="govtId"
                                    type="text"
                                    value={govtId}
                                    onChange={handleGovtIdChange}
                                    placeholder={`Enter ${idType} number`}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div class="footer">
                    <button type="button" class="btn btn-outline-danger" onClick={handleCancel}>Cancel <br></br>(Esc)</button>
                    &nbsp;
                    <button type="submit" value="submit" class="btn btn-success">Register</button>
                </div>
            </div>
        </form>
    )
}
