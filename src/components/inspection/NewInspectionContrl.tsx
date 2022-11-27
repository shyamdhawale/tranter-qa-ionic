import React, { useEffect, useState } from "react";
import { save, refreshOutline } from "ionicons/icons";
import { IonButton, IonCol, useIonAlert, IonRow } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { Prompt } from "react-router-dom";

const NewInspectionContrl: React.FC = () => {
  const {
    reset,
    formState: { isValid },
  } = useFormContext();
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [isPrompt, setIsPrompt] = useState(false);

  const onResetFrom = () => {
    presentAlert({
      header: "Confirm",
      subHeader: "Reset all the data?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          // handler: () => {
          //   setHandlerMessage('canceled');
          // },
        },
        {
          text: "Reset",
          role: "confirm",
          handler: () => {
            reset();
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
    // reset();
  };

  useEffect(() =>{
    setIsPrompt(!isValid)
  }, [isValid])

  const onCancel = () => {
    setIsPrompt(!isPrompt);
  };
  console.log("isPrompt", isPrompt);

  return (
    <>
      <IonRow>
        <IonCol>
          <IonButton type="submit">Submit</IonButton>
        </IonCol>
        <IonCol>
          <IonButton onClick={onCancel}>Cancel</IonButton>
        </IonCol>
        <IonCol>
          <IonButton onClick={onResetFrom}>Reset</IonButton>
        </IonCol>
      </IonRow>
      <Prompt
        when={true}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      
    </>
  );
};

export default NewInspectionContrl;
