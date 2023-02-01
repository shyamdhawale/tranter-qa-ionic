import {
  IonContent,
  IonGrid,
  IonPage,
  useIonAlert,
  useIonViewWillEnter,
  useIonLoading,
  useIonViewWillLeave,
  IonLoading,
} from "@ionic/react";
import React, { useState, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../../../UI/Header";
import Navigation from "../../../UI/Navigation";
import Model2000Header from "./Model2000Header";
import Model2000Control from "./Model2000Control";
import Model2000Characteristics from "./Model2000Characteristics";

//import "./Inspection.module.css";
import AuthContext from "../../../../store/auth-context";
import HydrostaticTestReprt from "../../../HydrostaticReport/HydrostaticTestReport";
import TestParameter from "../../../HydrostaticReport/TestParameter";
import Observations from "../../../HydrostaticReport/Observations";
import ChecklistPhoto from "../../../Checklistphoto/ChecklistPhoto";
import ChecklistPhotoMain from "../../../Checklistphoto/ChecklistPhotoMain";

interface defaultValues {
  client: String;
  pono: Number;
}

const NewModel2000: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [successAlert] = useIonAlert();
  const [errorAlert] = useIonAlert();
  const [showLoading, setShowLoading] = useState(false);

  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [sererror, setSererror] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<defaultValues>({
    // defaultValues: {
    //   client: "tranter",
    //   pono: 12321,
    // },
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  useIonViewWillEnter(() => {
    // console.log("ionViewDidEnter");
    methods.reset({}, { keepDefaultValues: true });
  });
  useIonViewWillLeave(() => {
    reset();
  });
  const {
    reset,
    formState: { isValid },
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
                  "http://" + process.env.REACT_APP_URL + "/api/inspection",
                  {
                    data: draftData,
                  }
                )
                .then((res) => {
                  console.log(res);
                  // setSererror("Data Saved Successfully");
                  setIsLoading(false);
                  setShowLoading(false);
                  successAlert({
                    header: "Info",
                    subHeader: res.data.message,
                    buttons: ["OK"],
                  });
                  history.push("/");
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
        // onDidDismiss: (e: CustomEvent) =>
        //   setRoleMessage(`Dismissed with role: ${e.detail.role}`),
      });
    } else {
      setTimeout(() => {
        history.push("/");
      }, 3100);
      presentAlert({
        // header: "Message",
        subHeader: "first message",
        // message: "Inspection report stored!",
        buttons: ["OK"],
      });
    }
  };

  // if (isLoading) {
  //   return <p>Loading</p>;
  // }

  // useIonViewWillEnter(() => {
  //   setShowLoading(true);
  //   loadProducts().then(() => {
  //     setShowLoading(false);
  //   });
  // });

  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent>
          <FormProvider {...methods}>
            <form onSubmit={(e) => onSubmit(e)}>
              <IonGrid>
                {/* <Model2000Header /> */}
                {/* <Model2000Characteristics /> */}
                <HydrostaticTestReprt />
                <TestParameter />
                <Observations />
                <ChecklistPhotoMain />
                <Model2000Control />
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
