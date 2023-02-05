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

const Model2000ControlEdit: React.FC = () => {
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
                customer: "",
                supplier: "",
                vendorcode: "",
                classification: "",
                partname: "",
                critical: "",
                partno: "",
                major: "",
                mfgsrno: "",
                minor: "",
                drgno: "",
                actualresult_1: "",
                actualresult_2: "",
                actualresult_3: "",
                actualresult_4: "",
                actualresult_5: "",
                actualresult_6: "",
                actualresult_7: "",
                actualresult_8: "",
                actualresult_9: "",
                actualresult_10: "",
                actualresult_11: "",
                actualresult_12: "",
                actualresult_13: "",
                actualresult_14: "",
                actualresult_15: "",
                actualresult_16: "",
                actualresult_17: "",
                actualresult_18: "",
                actualresult_19: "",
                actualresult_20: "",
                actualresult_21: "",
                actualresult_22: "",
                actualresult_23: "",
                actualresult_24: "",
                actualresult_25: "",
                actualresult_26: "",
                actualresult_27: "",
                actualresult_28: "",
                actualresult_29: "",
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
          <IonButton type="submit">Save</IonButton>
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

export default Model2000ControlEdit;
