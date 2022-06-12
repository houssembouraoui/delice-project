import { useEffect, useState } from "react";

export const prepareCamionFormPayload = (formOutPut) => {
    console.log(formOutPut, "formOutPut");
 return {
    camionId: formOutPut.camionId,
    vendorId : formOutPut.fournisseur,
    registration : formOutPut.immatriculation,
    warblerDate : formOutPut.date,
    quantity : formOutPut.quantity
 }
}

const useCamionForm = ({formContext, camionById}) => {
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
  
  const defineInitialValues = (formContext) => {
   const camionInitialRawData = formContext ==="update" ? camionById : null;
   return {
    camionId : camionInitialRawData?.camionId || null,
    fournisseur:  camionInitialRawData?.vendorId|| "",
    immatriculation: camionInitialRawData?.registration || "",
    date: camionInitialRawData?.warblerDate?.slice(0,10) || "",
    quantity: camionInitialRawData?.quantity||"",
   }

  }


  useEffect(()=> {
      const init = defineInitialValues(formContext,camionById )
      setInitialValues(init)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ formContext,  camionById , setInitialValues])
  return {initialValues, formIsReady, setFormIsReady}
}

export default useCamionForm
