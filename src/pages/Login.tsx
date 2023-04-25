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
import { Redirect, useHistory, useLocation } from "react-router-dom";

import React, { useState, useContext, useEffect } from "react";

import "./Login.css";
import jwtInterceoptor from "../hook/jwtInterceptor";
import AuthContext from "../store/auth-context";
import axios from "axios";
import { error } from "console";

const Login: React.FC = () => {
  const history = useHistory();
  const authctx = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [notlogin, setLogin] = useState(false);
  const isloggin = authctx.isLoggedIn;

  useEffect(() => {
    jwtInterceoptor
      // axios
      .get("http://" + process.env.REACT_APP_URL + "/auth/checkauth")
      .then((res) => {
        console.log(res.status);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });

    //       // history.push("/login");
    //       // }
    //     });
  }, [history]);

  // useEffect(() => {
  //   if (isloggin) {
  //     setLogin(true);
  //   }
  // }, [isloggin, setLogin]);

  // if (notlogin) {
  //   return <Redirect to={"/"}></Redirect>;
  // }

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
    jwtInterceoptor
      // axios
      .get("http://" + process.env.REACT_APP_URL + "/auth/checkauth")
      .then((res) => {
        console.log(res.status);
        history.push("/");
      })
      .catch((err) => {
        // if (err.response.status === 401) {

        if (err.response) {
          if (err.response.status === 406) {
            // history.push("/login");
            authctx.login({
              username: username,
              password: password,
            });
            history.push("/login");
          }
        }
        if (err) {
          authctx.login({
            username: username,
            password: password,
          });
          history.push("/login");
        }
      });

    // authctx.onLogin(username, password);
    // history.push("/");

    // axios
    //   .post("http://" + process.env.REACT_APP_URL + "/api/login", {
    //     username,
    //     password,
    //   })
    //   .then((response) => {
    //     console.log(response.data);

    //     if (response.status === 200) {
    //       setMessage(response.data.message);
    //       setIsError(true);
    //     }
    //     // send the token and role to auth context.
    //     // authctx.onLogin(response.data.token, response.data.role);
    //     authctx.login(username, password);
    //   })
    //   .catch((err) => {
    //     console.log(err.response.status);
    //     if (err.response.status === 404) {
    //       setMessage(err.response.data.message);
    //       setIsError(true);
    //     }
    //     if (err.response.status === 400) {
    //       setMessage(err.response.data.message);
    //       setIsError(true);
    //     }
    //   });
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
      <IonFooter translucent={true}>
        <IonToolbar>
          <IonTitle>Tranter India Pvt. Ltd.</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
