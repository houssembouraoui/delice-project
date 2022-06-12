import { useEffect, useState } from "react";

export const prepareCamionFormPayload = (formOutPut) => {
    console.log(formOutPut);
 return {

 }
}

const useCamionForm = ({formContext}) => {
    const [formIsReady, setFormIsReady] = useState(false);
    const [initialValues, setInitialValues] = useState(
        {
        camionId : null,
        fournisseur: "",
        immatriculation: "",
        date: "",
        quantity: null,
        }
    )
      const camionDatas = {
        camionId : 1,
        fournisseur: "ff",
        immatriculation: "gg",
        date: "2022-06-04",
        quantity: 20,
      }
  const defineInitialValues = (formContext) => {
   const camionInitialRawData = formContext ==="update" ? camionDatas : null;
   return {
    camionId : camionInitialRawData?.camionId || null,
    fournisseur:  camionInitialRawData?.fournisseur|| "",
    immatriculation: camionInitialRawData?.immatriculation || "",
    date: camionInitialRawData?.date || "",
    quantity: camionInitialRawData?.quantity||null,
   }

  }

//   useEffect(()=> {
//       if (formContext === "add") {
//         setFormIsReady(true)
//       } 
//       formContext === "add" ? setFormIsReady(true) : setFormIsReady(false);
//       formContext ==="update" ? setFormIsReady(true) : setFormIsReady(false)
//   },[formIsReady, formContext, /* camionById */]) 

  useEffect(()=> {
      const init = defineInitialValues(formContext, /*camionById  */)
      setInitialValues(init)
  },[ formContext, /* camionById */, setInitialValues])
  return {initialValues, formIsReady, setFormIsReady}
}

export default useCamionForm
