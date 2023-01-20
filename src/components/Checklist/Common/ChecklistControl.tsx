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

const ChecklistContrl: React.FC = () => {
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
                supplier: "",
                customer: "",
                vendorcode: "",
                classification: "",
                partname: "",
                critical: "",
                partno: "",
                major: "",
                mfgsrno: "",
                minor: "",
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

export default ChecklistContrl;
