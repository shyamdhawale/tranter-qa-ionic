import React, { useEffect, useState } from "react";
import { save, refreshOutline } from "ionicons/icons";
import {
  IonButton,
  IonCol,
  useIonAlert,
  IonRow,
  useIonViewDidLeave,
  useIonViewWillLeave,
} from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { Prompt, useHistory } from "react-router-dom";

const HydrostaticContrl: React.FC = () => {
  const history = useHistory();
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
        },
        {
          text: "Reset",
          role: "confirm",
          handler: () => {
            // reset();
            reset(
              {
                reportno: "",
                date: "",
                sono: "",
                mfgsrno: "",
                model: "",
                pdirno: "",
                tagno: "",
                customer: "",
                drgnumber: "",
                hotside_1: "",
                coldside_1: "",
                hotside_2: "",
                coldside_2: "",
                hotside_3: "",
                coldside_3: "",
                hotside_4: "",
                coldside_4: "",
                hotside_5: "",
                coldside_5: "",
                hotside_6: "",
                coldside_6: "",
                guageidnohotside: "",
                guagerangehotside: "",
                calibrationvalidhotside: "",
                observedpressurehotside: "",
                guageidnocoldside: "",
                guagerangecoldside: "",
                calibrationvalidcoldside: "",
                observedpressurecoldside: "",
              },
              { keepValues: false }
            );
            console.log("confirm reset");
          },
        },
      ],
      // onDidDismiss: (e: CustomEvent) =>
      //   setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
    // reset();
  };

  // useEffect(() => {
  //   setIsPrompt(!isValid);
  // }, [isValid]);

  const onCancel = () => {
    presentAlert({
      header: "Cancel",
      subHeader: "You have unsaved changes, are you sure you want to leave?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Ok",
          role: "confirm",
          handler: () => {
            history.push("/");
          },
        },
      ],
    });
  };

  return (
    <>
      <IonRow>
        <IonCol>
          <IonButton type="submit">Submit</IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" onClick={onCancel} color="secondary">
            Cancel
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton fill="outline" onClick={onResetFrom} color="danger">
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
      <Prompt
        when={isPrompt}
        message="You have unsaved changes, are you sure you want to leave?"
      />
    </>
  );
};

export default HydrostaticContrl;
