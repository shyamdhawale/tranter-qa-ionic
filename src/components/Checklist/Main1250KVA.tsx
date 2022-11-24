import { IonPage, useIonLoading, IonContent } from "@ionic/react";
import React from "react";
import ButtonControl from "../UI/ButtonControl";
import NewChecklistHeader from "./Common/NewChecklistHeader";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NewObservations from "./Common/NewObservations";
import NewHydrostaticTestReport from "./Model1250KVA/NewHydrostaticTestReport";
import Header from "../UI/Header";
import NewCharacteristics_1250Details from "./Common/NewCharacteristics_1250Details";

const Main1250KVA: React.FC = () => {
  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const onSubmitHandler = () => {
    present({
      message: "Storing data on the server",
      duration: 3000,
    });
    axios
      .post("http://192.168.1.13:3001/checklist")
      .then((res) => console.log(res));
  };

  const onCancelHandler = () => {
    history.push("/");
  };
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding">
        <NewChecklistHeader onThChangeData={(e) => console.log(e)} />
        <NewHydrostaticTestReport onThChangeData={(e) => console.log(e)} />
        <NewObservations onThChangeData={(e) => console.log(e)} />
        <NewCharacteristics_1250Details
          onCharacteristicsChange={(e) => console.log(e)}
        />
        <ButtonControl onSubmit={onSubmitHandler} onCancel={onCancelHandler} />
      </IonContent>
    </IonPage>
  );
};

export default Main1250KVA;
