import { IonContent, IonGrid, IonPage, useIonAlert } from "@ionic/react";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Prompt } from "react-router-dom";

import Header from "../UI/Header";
import Navigation from "../UI/Navigation";
import NewInspectionContrl from "./NewInspectionContrl";
import NewInspectionHeader from "./NewInspectionHeader";
import "./NewInspection.module.css";

const NewInspection: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

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
            },
          },
        ],
        onDidDismiss: (e: CustomEvent) =>
          setRoleMessage(`Dismissed with role: ${e.detail.role}`),
      });
    }
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
                <NewInspectionHeader />

                <NewInspectionContrl />
              </IonGrid>
            </form>
          </FormProvider>
        </IonContent>
         
      </IonPage>
    </>
  );
};

export default NewInspection;
