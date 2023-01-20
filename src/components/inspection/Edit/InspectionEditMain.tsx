import {
  IonButton,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
} from "@ionic/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import InspectionContrl from "../InspectionContrl";

interface defaultValues {
  client: String;
  pono: Number;
}

const InspectionEditMain: React.FC = () => {
  const location = useLocation();
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();
  const [inspeDetail, setInspeDetail] = useState([
    {
      client: "",
      pono: "",
      serialnumber: "",
      date: "",
      model: "",
      mfgsrno: "",
      tagnumber: "",
      qapnumber: "",
      drgnumber: "",
      materialmoc_1: "",
      materialheatno_1: "",
      materialmtcno_1: "",
      materialmoc_2: "",
      materialheatno_2: "",
      materialmtcno_2: "",
      materialmoc_3: "",
      materialheatno_3: "",
      materialmtcno_3: "",
      materialmoc_4: "",
      materialheatno_4: "",
      materialmtcno_4: "",
      materialmoc_5: "",
      materialheatno_5: "",
      materialmtcno_5: "",
      materialmoc_6: "",
      materialheatno_6: "",
      materialmtcno_6: "",
      dimentionobserved_1: "",
      dimentionreq_1: "",
      dimentionobserved_2: "",
      dimentionreq_2: "",
      dimentionobserved_3: "",
      dimentionreq_3: "",
      dimentionobserved_4: "",
      dimentionreq_4: "",
      dimentionobserved_5: "",
      dimentionreq_5: "",
      dimentionobserved_6: "",
      dimentionreq_6: "",
      dimentionobserved_7: "",
      dimentionreq_7: "",
      dimentionobserved_8: "",
      dimentionreq_8: "",
      dimentionobserved_9: "",
      dimentionreq_9: "",
      dimentionobserved_10: "",
      dimentionreq_10: "",
      dimentionobserved_11: "",
      dimentionreq_11: "",
      hyrodprocedureno: "",
      hydrotestpressurereqd: "",
      hydropressureguageno: "",
      hydrocertificateno: "",
      hydropressurehotside: "",
      hydroobspressue_1: "",
      hydropressurecoldside: "",
      hydroobspressue_2: "",
      hydroduration: "",
      hydroduration_obs: "",
      hydroresult: "",
      hydrodaccepted: "",
      paitingprimer_1: "",
      paintingfinalpre_1: "",
      paintingdft_1: "",
      paitingprimer_2: "",
      paintingfinalpre_2: "",
      paintingdft_2: "",
      createAt: "",
    },
  ]);
  const methods = useForm<defaultValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const lastPath = location.pathname.split("/")[2]; // get only last params

  useEffect(() => {
    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/inspection/" + lastPath
      )
      .then((res) => {
        setInspeDetail([res.data.data]);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);
  console.log(inspeDetail);
  return (
    <>
      <FormProvider {...methods}>
        <form>
          <table>
            <tbody>
              <tr>
                <th>Abc</th>
                <td>
                  <IonInput></IonInput>
                </td>
                <th>abc</th>
                <td>
                  <IonInput></IonInput>
                </td>
              </tr>
            </tbody>
          </table>
          <InspectionContrl />
        </form>
      </FormProvider>
    </>
  );
};

export default InspectionEditMain;
