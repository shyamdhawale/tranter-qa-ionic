import React, { useState, useEffect } from "react";
import { IonContent, IonGrid, useIonAlert } from "@ionic/react";

import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useLocation } from "react-router";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";
import Navigation from "../../../../UI/Navigation";
import Header from "../../../../UI/Header";
import Model1500Header from "../Model1500Header";
import Header1500 from "../Pdf1500/Header1500";
import Model1500Characteristics from "../Model1500Characteristics";
import Model1500ControlEdit from "../Model1500ControlEdit";
import HydrostaticTestReportHeader1500 from "../HydrostaticReport/HydrostaticTestReportHeader1500";
import TestParameter1500 from "../HydrostaticReport/TestParameter1500";
import Observations1500 from "../HydrostaticReport/Observations1500";
import ChecklistPhotoMain1500 from "../ChecklistPhotoMain1500";
// import ChecklistPhotoMain2000 from "../ChecklistPhotoMain2000";

interface defaultValues {
  client: String;
  pono: Number;
  somename: String;
  header_date: Date;
  header_mfgsrno: String;
}

const ChecklistSingleEdit1500 = () => {
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
        "http://" + process.env.REACT_APP_URL + "/api/checklist1500/" + lastPath
      )
      .then((res) => {
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
  // console.log(myData);
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
                    "/api/checklist1500/" +
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
                    history.push("/list-checklist/1500");
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
    }
  };

  return (
    <>
      <IonContent>
        <FormProvider {...methods}>
          <form onSubmit={(e) => onSubmit(e)}>
            <IonGrid>
              <Model1500Header />
              <Model1500Characteristics />
              <HydrostaticTestReportHeader1500 />
              <TestParameter1500 />
              <Observations1500 />
              {/* <ChecklistPhotoMain1500 reportSrNo={myData.header_mfgsrno} /> */}
              <Model1500ControlEdit />
            </IonGrid>
          </form>
        </FormProvider>
      </IonContent>
    </>
  );
};

export default ChecklistSingleEdit1500;
