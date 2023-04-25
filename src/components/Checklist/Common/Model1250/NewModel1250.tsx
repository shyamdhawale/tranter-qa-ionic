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
import Model1250Header from "./Model1250Header";
import Model1250Control from "./Model1250Control";
import Model1250Characteristics from "./Model1250Characteristics";

//import "./Inspection.module.css";
import AuthContext from "../../../../store/auth-context";
import HydrostaticTestReportHeader1250 from "./HydrostaticReport/HydrostaticTestReportHeader1250";
import TestParameter1250 from "./HydrostaticReport/TestParameter1250";
import Observations1250 from "./HydrostaticReport/Observations1250";
import ChecklistPhotoMain1250 from "./ChecklistPhotoMain1250";

interface defaultValues {
  client: String;
  pono: Number;
  somename: String;
  header_date: Date;
  header_mfgsrno: String;
}

const NewModel1250: React.FC = () => {
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
                  "http://" + process.env.REACT_APP_URL + "/api/checklist1250",
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
      .get("http://" + process.env.REACT_APP_URL + "/api/checklist1250")
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
                <Model1250Header />
                {isReport ? (
                  <>
                    <Model1250Characteristics />
                    <HydrostaticTestReportHeader1250 />
                    <TestParameter1250 />
                    <Observations1250 />
                    <ChecklistPhotoMain1250
                      reportSrNo={methods.getValues().header_mfgsrno}
                    />
                    <Model1250Control />
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

export default NewModel1250;
