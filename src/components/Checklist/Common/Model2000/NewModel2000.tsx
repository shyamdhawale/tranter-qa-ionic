import {
  IonContent,
  IonGrid,
  IonPage,
  useIonAlert,
  useIonViewWillEnter,
  useIonLoading,
  useIonViewWillLeave,
  IonLoading,
  IonInput,
  IonButton,
  IonRow,
} from "@ionic/react";
import React, { useState, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";

import Header from "../../../UI/Header";
import Navigation from "../../../UI/Navigation";
import Model2000Header from "./Model2000Header";
import Model2000Control from "./Model2000Control";
import Model2000Characteristics from "./Model2000Characteristics";

//import "./Inspection.module.css";
import AuthContext from "../../../../store/auth-context";
import HydrostaticTestReportHeader2000 from "./HydrostaticReport/HydrostaticTestReportHeader2000";
import TestParameter2000 from "./HydrostaticReport/TestParameter2000";
import Observations2000 from "./HydrostaticReport/Observations2000";
import ChecklistPhotoMain2000 from "./ChecklistPhotoMain2000";

interface defaultValues {
  client: String;
  pono: Number;
  somename: String;
  header_date: Date;
  header_mfgsrno: String;
}

const NewModel2000: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [successAlert] = useIonAlert();
  const [errorAlert] = useIonAlert();
  const [showLoading, setShowLoading] = useState(false);

  const history = useHistory();
  // const [present, dismiss] = useIonLoading();
  const [handlerMessage, setHandlerMessage] = useState("");
  // const [roleMessage, setRoleMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const methods = useForm<defaultValues>({
    // defaultValues: {
    //   // abbc: false,
    // },
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  useIonViewWillEnter(() => {
    // console.log("ionViewDidEnter");
    methods.reset({}, { keepDefaultValues: true });
    setIsReport(false);
  });
  useIonViewWillLeave(() => {
    reset();
  });

  const {
    reset,
    formState: { isValid, errors },
  } = methods;

  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  // if (!isLogin) {
  //   return <Redirect to={{ pathname: "/login" }} />;
  // }

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
                .post(
                  "http://" + process.env.REACT_APP_URL + "/api/checklist2000",
                  {
                    data: draftData,
                  }
                )
                .then((res) => {
                  console.log(res);
                  setIsLoading(false);
                  setShowLoading(false);
                  if (res.data.message === "Report Saved Successfully!") {
                    // setSererror("Data Saved Successfully");
                    setIsLoading(false);
                    setShowLoading(false);
                    successAlert({
                      header: "Info",
                      subHeader: res.data.message,
                      buttons: ["OK"],
                    });
                    history.push("/");
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
  // this function is for finding duplicates mfgsrno.
  const findduplicates = (arr: any) =>
    arr.filter((item: any, index: number) => {
      if (item.header_mfgsrno === methods.getValues().header_mfgsrno) {
        return true;
      } else {
        return false;
      }
    });

  const onReportChange = () => {
    axios
      .get("http://" + process.env.REACT_APP_URL + "/api/checklist2000")
      .then((res) => {
        const isDuplicate = findduplicates(res.data);
        console.log(isDuplicate);
        if (isDuplicate.length !== 0) {
          errorAlert({
            header: "Error!",
            subHeader: "Duplicate SR. NO.",
            message: "Enter correct SR. NO.",
            buttons: ["OK"],
          });
        } else {
          setIsReport(true);
        }
      })
      .catch((err) => {
        errorAlert({
          header: "Error!",
          subHeader: "Network error",
          buttons: ["OK"],
        });
      });
    // setIsReport(true);
  };

  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent>
          <FormProvider {...methods}>
            <form onSubmit={(e) => onSubmit(e)}>
              <IonGrid>
                <Model2000Header />
                {isReport ? (
                  <>
                    <Model2000Characteristics />
                    <HydrostaticTestReportHeader2000 />
                    <TestParameter2000 />
                    <Observations2000 />
                    <ChecklistPhotoMain2000
                      reportSrNo={methods.getValues().header_mfgsrno}
                    />
                    <Model2000Control />
                  </>
                ) : (
                  <IonButton className="ion-padding" onClick={onReportChange}>
                    Next
                  </IonButton>
                )}
              </IonGrid>
            </form>

            <IonLoading
              isOpen={showLoading}
              onDidDismiss={() => setShowLoading(false)}
              message={"Loading..."}
              // duration={5000}
            />
          </FormProvider>
        </IonContent>
      </IonPage>
    </>
  );
};

export default NewModel2000;
