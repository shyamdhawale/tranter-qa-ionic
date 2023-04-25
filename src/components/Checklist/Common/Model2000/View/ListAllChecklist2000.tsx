import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonItem,
  IonList,
  IonSearchbar,
  IonText,
  IonLoading,
  useIonAlert,
  useIonViewWillEnter,
} from "@ionic/react";
import axios from "axios";
import { useHistory } from "react-router";
import jwtInterceoptor from "../../../../../hook/jwtInterceptor";

const ListAllChecklist2000 = () => {
  const history = useHistory();
  const [presentAlert] = useIonAlert();
  const [successAlert] = useIonAlert();
  const [errorAlert] = useIonAlert();
  const [showLoading, setShowLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [checklists, setChecklists] = useState([
    {
      client: "",
      _id: 0,
      header_classification: "",
      header_mfgsrno: "",
    },
  ]);

  useIonViewWillEnter(() => {
    jwtInterceoptor
      // axios
      .get("http://" + process.env.REACT_APP_URL + "/api/checklist2000")
      .then((res) => {
        const sortedData = res.data.sort(function (a: any, b: any) {
          return a - b;
        });
        setChecklists(sortedData);
      })
      .catch((err) => setIsError(true));
  });

  // useEffect(() => {
  //   axios
  //     .get("http://" + process.env.REACT_APP_URL + "/api/checklist2000")
  //     .then((res) => setInsList(res.data))
  //     .catch((err) => setIsError(true));
  // }, []);

  // console.log(insList);

  let [results, setResults] = useState([...checklists]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(
      checklists.filter((d) => d.client.toLowerCase().indexOf(query) > -1)
    );
  };

  const onHandleEdit = (ev: number) => {
    console.log("editClick", ev);
    const myUrl =
      "http://" + process.env.REACT_APP_URL + "/api/checklist2000/" + ev;
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
                "http://" +
                  process.env.REACT_APP_URL +
                  "/api/checklist2000/" +
                  ev
              )
              .then((res) => {
                console.log(res);
                // setSererror("Data Saved Successfully");
                axios
                  .get(
                    "http://" + process.env.REACT_APP_URL + "/api/checklist2000"
                  )
                  .then((res) => setChecklists(res.data))
                  .catch((err) => setIsError(true));

                setShowLoading(false);
                successAlert({
                  header: "Info",
                  subHeader: res.data.message,
                  buttons: ["OK"],
                });
                history.push("/list-checklist/2000");
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
      .delete(
        "http://" + process.env.REACT_APP_URL + "/api/checklist2000/" + ev
      )
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
      {/* <IonSearchbar
        debounce={1000}
        onIonChange={(ev) => handleChange(ev)}
      ></IonSearchbar> */}

      <IonList>
        {checklists.map((result, index) => (
          <IonItem key={index}>
            <IonCol>
              {result.header_classification} - {result.header_mfgsrno}
            </IonCol>
            <IonButton routerLink={`${"/checklist/2000/edit/" + result._id}`}>
              Edit
            </IonButton>
            <IonButton routerLink={`${"/checklist/2000/view/" + result._id}`}>
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
        duration={1200000}
      />
    </>
  );
};

export default ListAllChecklist2000;
