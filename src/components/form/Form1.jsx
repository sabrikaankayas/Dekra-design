import React from 'react'
import { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup";
import "./form1.css"

import logo from "../../assets/dekra-logo.png"
import {ImCross} from "react-icons/im"
import {MdKeyboardArrowRight} from "react-icons/md"
import {MdKeyboardArrowLeft} from "react-icons/md"

const Form1 = ({closeModal}) => {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })
    const [currentStep, setCurrentStep] = useState(0)
    const [errors, setErros] = useState({})

    const makeRequest = (formData) => {
      console.log("Form Submitted", formData)
    }

    const hadndleNextStep = (newData, final = false) => {
      setData(prev => ({...prev, ...newData}))

      if (final) {
        makeRequest(newData)
        return
      }

      setCurrentStep(prev => prev + 1)
    }

    const hadndlePrevStep = (newData) => {
      setData(prev => ({...prev, ...newData}))
      setCurrentStep(prev => prev - 1)
    } 

    const steps = [
    <StepOne next={hadndleNextStep} data={data} errors={errors}/>, 
    <StepTwo next={hadndleNextStep} prev={hadndlePrevStep} data={data}/>
  ]

  const modal = () => {
    closeModal(false)
    document.body.style.overflow = 'unset';
  }

  return (
    <div className='form__container'>
      <div className='header__container2'> 
        <img className='header__logo' src={logo} alt="dekra logo" />
        <div className='header__icon2' onClick={modal}>
          <ImCross/>
        </div>
      </div>
      <div className='form1__box'>
      {currentStep === 1 && <h3>[1/7]</h3>}
        {currentStep === 0 && <h1 className='step0h1'>Bliv ringet op</h1>}
        {currentStep === 1 && <h1 className='step1h1'>Hvad er dit navn</h1>}
        {currentStep === 0 && <h2>Besvar 7 hurtige spørgsmål herunder, og bliv ringet op til en uforpligtende samtale med en af vores udannelses-konsulenter, for at se om uddannelsen til lastbilchauffør er noget for dig. *</h2>}
        {currentStep === 0 && <div className='form1__insideBox'>
          <p>*Vi oplever mange henvendelser og har få pladser på holdene, så sorg for at besvare spørgsmålene så godt som muligt.</p>
        </div>}
      </div>
       {steps[currentStep]}
    </div>
  )
}

// const stepOneValidationSchema = Yup.object({
//   first_name: Yup.string().required().label("First name"),
//   last_name: Yup.string().required().label("Last name")
// })

// const StepOne = (props) => {
//   const handleSubmit = (values) => {
//     props.next(values)
//   }

//   return (
//     <Formik
//       validationSchema={stepOneValidationSchema}
//       initialValues={props.data}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form>
//           <div className='stepOne__container'>
//           <p>First Name</p>
//           <Field name="first_name"/>
//           <ErrorMessage name="first_name"/>
          
//           <p>Last Name</p>
//           <Field name="last_name"/>
//           <ErrorMessage name="last_name"/>

//           <button type='submit'>Next</button>
//           </div>
//         </Form>
//       )}</Formik>
//   )
// }

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values)
  }

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className='stepOne__container'>
          <button className='stepOne__button' type='submit'>Start <MdKeyboardArrowRight className='form1__arrow'/></button>
          </div>
        </Form>
      )}</Formik>
  )
}

const stepTwoValidationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password")
})

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true)
  }

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {(values) => (
        <Form>
          <div className='step1Fields'>
          <Field className="field1" name="first_name"/>
          
          <Field className="field2" name="last_name"/>
          </div>
          <div className='step1__container'>
          <button className='step1__prev' type='button' onClick={() => props.prev(values)}><MdKeyboardArrowLeft/></button>
          <button className='step1__button' type='submit'>Næste <MdKeyboardArrowRight className='step1__arrow'/></button>
          </div>
        </Form>
      )}</Formik>
  )
}

export default Form1