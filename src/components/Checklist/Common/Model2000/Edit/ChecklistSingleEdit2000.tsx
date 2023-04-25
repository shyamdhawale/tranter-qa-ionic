import React, { useState, useEffect } from "react";
import { IonContent, IonGrid, IonPage, useIonAlert } from "@ionic/react";

import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useLocation } from "react-router";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";
import Navigation from "../../../../UI/Navigation";
import Header from "../../../../UI/Header";
import Model2000Header from "../Model2000Header";
import Header2000 from "../PDF2000/Header2000";
import Model1250Characteristics from "../../Model1250/Model1250Characteristics";
import Model2000ControlEdit from "../Model2000ControlEdit";
import HydrostaticTestReportHeader2000 from "../HydrostaticReport/HydrostaticTestReportHeader2000";
import TestParameter2000 from "../HydrostaticReport/TestParameter2000";
import Observations2000 from "../HydrostaticReport/Observations2000";
import ChecklistPhotoMain2000 from "../ChecklistPhotoMain2000";
import Model2000Characteristics from "../Model2000Characteristics";

interface defaultValues {
  client: String;
  pono: Number;
  somename: String;
  header_date: Date;
  header_mfgsrno: String;
}

const ChecklistSingleEdit2000 = () => {
  const [presentAlert] = useIonAlert();
  const [successAlert] = useIonAlert();
  const [errorAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [myData, setMyData] = useState({
    header_mfgsrno: "",
  });
  const methods = useForm<defaultValues>({
    defaultValues: myData,
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const { register, reset } = methods;

  const lastPath = location.pathname.split("/")[4]; // get only last params

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/checklist2000/" + lastPath
      )
      .then((res) => {
        // console.log(res);
        setMyData(res.data.data);
        // setTimeout(() => {
        setIsLoading(false);
        // }, 3000);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);
  // edit form
  useEffect(() => {
    reset(myData);
  }, [reset, myData]);

  if (isLoading) {
    return <p>Loading </p>;
  }
  console.log(myData);
  const onSubmit = (data: any) => {
    data.preventDefault();
    let draftData = methods.getValues();

    console.log("draftData", draftData);
    console.log("isValid", methods.formState.isValid);
    if (!methods.formState.isValid) {
      presentAlert({
        header: "Alert!",
        subHeader: "Some of the values are not entered",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              setHandlerMessage("canceled");
            },
          },
          {
            text: "Save Draft",
            role: "confirm",
            handler: () => {
              setHandlerMessage("Save as Draft");
              setIsLoading(true);
              setShowLoading(true);
              axios
                .patch(
                  "http://" +
                    process.env.REACT_APP_URL +
                    "/api/checklist2000/" +
                    lastPath,
                  {
                    data: draftData,
                  }
                )
                .then((res) => {
                  console.log(res);
                  setIsLoading(false);
                  setShowLoading(false);
                  if (res.data.message === "Update successfully.") {
                    // setSererror("Data Saved Successfully");
                    setIsLoading(false);
                    setShowLoading(false);
                    successAlert({
                      header: "Info",
                      subHeader: res.data.message,
                      buttons: ["OK"],
                    });
                    history.push("/list-checklist/2000");
                  } else {
                    // setIsLoading(false);
                    // setShowLoading(false);

                    successAlert({
                      header: "Error",
                      subHeader: "Please check SR. No.",
                      buttons: ["OK"],
                    });
                  }
                })
                .catch((err) => {
                  errorAlert({
                    header: "Error!",
                    subHeader: err.message,
                    message: "Not able to save. please try again",
                    buttons: ["OK"],
                  });
                });
            },
          },
        ],
      });
    } else {
      setTimeout(() => {
        history.push("/");
      }, 3100);
      // presentAlert({
      //   // header: "Message",
      //   subHeader: "first message",
      //   // message: "Inspection report stored!",
      //   buttons: ["OK"],
      // });
    }
  };

  return (
    <>
      <IonContent>
        <FormProvider {...methods}>
          <form onSubmit={(e) => onSubmit(e)}>
            <IonGrid>
              <Model2000Header />
              <Model2000Characteristics />
              <HydrostaticTestReportHeader2000 />
              <TestParameter2000 />
              <Observations2000 />
              {/* <ChecklistPhotoMain2000 reportSrNo={myData.header_mfgsrno} /> */}

              <Model2000ControlEdit />
            </IonGrid>
          </form>
        </FormProvider>
      </IonContent>
    </>
  );
};

export default ChecklistSingleEdit2000;
