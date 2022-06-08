import { useEffect, useState } from "react";

export const prepareCamionFormPayload = (formOutPut) => {
  console.log(formOutPut);
  return {};
};

const useAnalyseForm = ({ formContext }) => {
  const [formIsReady, setFormIsReady] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: 1,
    fournisseur: "",
    humidité: 0,
    ph: 0,
    densité: 0,
    acidité: 0,
    aspect: "",
    matiere: 0,
    etat: "",
    Date: 0,
  });
  const camionDatas = {
    id: 1,
    fournisseur: "",
    humidité: 0,
    ph: 0,
    densité: 0,
    acidité: 0,
    aspect: "",
    matiere: 0,
    etat: "",
    date: "2022-06-04",
  };
  const defineInitialValues = (formContext) => {
    const analyseInitialRawData = formContext === "update" ? camionDatas : null;
    return {
      id: analyseInitialRawData?.id || null,
      fournisseur: analyseInitialRawData?.fournisseur || "",
      humidité: analyseInitialRawData?.humidité || "",
      ph: analyseInitialRawData?.ph || null,
      densité: analyseInitialRawData?.densité || null,
      acidité: analyseInitialRawData?.acidité || null,
      aspect: analyseInitialRawData?.aspect || null,
      matiere: analyseInitialRawData?.matiere || null,
      etat: analyseInitialRawData?.etat || "",
      date: analyseInitialRawData?.date || "",
    };
  };
  // console.log(defineInitialValues, "defineInitialValues");

  //   useEffect(()=> {
  //       if (formContext === "add") {
  //         setFormIsReady(true)
  //       }
  //       formContext === "add" ? setFormIsReady(true) : setFormIsReady(false);
  //       formContext ==="update" ? setFormIsReady(true) : setFormIsReady(false)
  //   },[formIsReady, formContext, /* camionById */])

  useEffect(() => {
    const init = defineInitialValues(formContext /*camionById  */);
    setInitialValues(init);
  }, [formContext /* camionById */, , setInitialValues]);
  return { initialValues, formIsReady, setFormIsReady };
};

export default useAnalyseForm;
