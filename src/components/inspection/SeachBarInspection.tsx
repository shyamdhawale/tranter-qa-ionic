import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonItem,
  IonList,
  IonRow,
  IonSearchbar,
  IonText,
  IonLoading,
  useIonAlert,
} from "@ionic/react";
import axios from "axios";
import { useHistory } from "react-router";

const SeachBarInspection = () => {
  const history = useHistory();
  const [presentAlert] = useIonAlert();
  const [successAlert] = useIonAlert();
  const [errorAlert] = useIonAlert();
  const [showLoading, setShowLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [insList, setInsList] = useState([
    {
      client: "",
      _id: 1,
    },
  ]);

  useEffect(() => {
    axios
      .get("http://" + process.env.REACT_APP_URL + "/api/inspection")
      .then((res) => setInsList(res.data))
      .catch((err) => setIsError(true));
  }, []);

  // console.log(insList);

  let [results, setResults] = useState([...insList]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(
      insList.filter((d) => d.client.toLowerCase().indexOf(query) > -1)
    );
  };

  const onHandleEdit = (ev: number) => {
    console.log("editClick", ev);
    const myUrl =
      "http://" + process.env.REACT_APP_URL + "/api/inspection/" + ev;
    history.push(myUrl);
  };

  const onDeleteHandle = (ev: number) => {
    presentAlert({
      header: "Alert!",
      subHeader: "Some of the values are not entered",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("canceled");
          },
        },
        {
          text: "Delete",
          role: "confirm",
          handler: () => {
            setShowLoading(true);
            axios
              .delete(
                "http://" + process.env.REACT_APP_URL + "/api/inspection/" + ev
              )
              .then((res) => {
                console.log(res);
                // setSererror("Data Saved Successfully");

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
    axios
      .delete("http://" + process.env.REACT_APP_URL + "/api/inspection/" + ev)
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err.message));
  };
  if (isError) {
    return (
      <IonList>
        <IonText>
          <h5>Error fetching data</h5>
        </IonText>
      </IonList>
    );
  }

  return (
    <>
      <IonSearchbar
        debounce={1000}
        onIonChange={(ev) => handleChange(ev)}
      ></IonSearchbar>

      <IonList>
        {insList.map((result, index) => (
          <IonItem key={index}>
            <IonCol>{result.client}</IonCol>
            <IonButton routerLink={`${"/inspectionedit/" + result._id}`}>
              Edit
            </IonButton>
            <IonButton routerLink={`${"/inspectiondetail/" + result._id}`}>
              View
            </IonButton>
            <IonButton onClick={() => onDeleteHandle(result._id)}>
              Delete
            </IonButton>
          </IonItem>
        ))}
      </IonList>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
    </>
  );
};

export default SeachBarInspection;
