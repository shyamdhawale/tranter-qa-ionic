import {
  IonButton,
  IonAlert,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonCard,
  IonIcon,
  IonText,
  IonFooter,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useHistory } from "react-router-dom";

import React, { useState } from "react";

import "./Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!username) {
      setMessage("Please enter a valid username");
      setIsError(true);
      return;
    }
    if (!password) {
      setMessage("Please enter your password");
      setIsError(true);
      return;
    }
    const loginData = {
      username: username,
      password: password,
    };
    history.push("/")
  };

  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">
        <IonRow>
          <IonCol>
            <IonAlert
              isOpen={isError}
              onDidDismiss={() => setIsError(false)}
              cssClass="my-custom-class"
              header={"Error!"}
              message={message}
              buttons={["Dismiss"]}
            />
          </IonCol>
        </IonRow>
        <IonGrid className="logincard">
          <IonRow>
            <IonCol>
              <IonIcon
                style={{ fontSize: "70px", color: "#0040ff" }}
                icon={personCircle}
              />
            </IonCol>
          </IonRow>
          <form>
            <IonText>
              <h1>Login</h1>
            </IonText>

            <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput
                type="text"
                value={username}
                onIonChange={(e) => setUsername(e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
            </IonItem>
            <IonButton
              className="ion-padding"
              expand="block"
              onClick={handleLogin}
            >
              
              Login
            </IonButton>
          </form>
        </IonGrid>
      </IonContent>
      <IonFooter translucent={true} >
        <IonToolbar>
            <IonTitle>Tranter India Pvt. Ltd.</IonTitle>

        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
