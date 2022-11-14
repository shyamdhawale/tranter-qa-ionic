import React, { useState } from "react";
import axios from "axios";
import {
  IonButton,
  IonContent,
  IonItemDivider,
  IonItemGroup,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
  IonGrid,
  IonInput,
  IonRow,
  useIonViewWillLeave,
} from "@ionic/react";
import { Prompt } from "react-router-dom";
import Navigation from "../UI/Navigation";
import Header from "../UI/Header";

import "./NewInspection.module.css";
import NewInspectionHeader from "./NewInspectionHeader";
import NewInspectionContrl from "./NewInspectionContrl";

const NewInspection: React.FC = () => {
  const [text, setText] = useState<string>("");
  useIonViewWillLeave(() => {
    setText("");
  });

  const onSubmitHandler = ()=>{
    axios.post('http://192.168.1.13:3001/inspection').then(res => console.log(res))
  }

  return (
    <>
      <Navigation />
      <IonPage id="main-content">
        <Header />
        <IonContent className="ion-padding">
          <NewInspectionHeader onThChangeData={(e) => console.log(e)} />
          <IonGrid>
            <IonRow className="ion-padding">
              <table>
                <caption>
                  <h3>Material Details</h3>
                </caption>
                <tbody>
                  <tr>
                    <th>Sr. No</th>
                    <th>Material Discription</th>
                    <th>MOC</th>
                    <th>HEAT NO</th>
                    <th>MTC NO</th>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Frame Plate</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter moc"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter heat no"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter mtc" required></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Pressure Plate</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter moc"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter heat no."></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter mtc"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Heat Transfer Plate</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter moc"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter heat no"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter MTC no"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Tightening Bolt + Nut</td>

                    <td>
                      <IonItem>
                        <IonInput placeholder="enter moc"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter heat no"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter MTC no"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Nozzle Pipe</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter moc"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter heat no"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter MTC no"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Nozzle Flanges</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter moc"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter heat no"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="enter MTC no"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                </tbody>
              </table>
            </IonRow>
            <IonRow className="ion-padding">
              <table>
                <caption>
                  <h3>Dimension Details</h3>
                </caption>
                <tbody>
                  <tr>
                    <th>SR. NO.</th>
                    <th>DESCRIPTION</th>
                    <th>DIMENSION Reqd.(mm)</th>
                    <th>DIMENSION OBSEREVED (mm)</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Frame Plate</td>s
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Pressure Plate</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>No. Of Heat Transfer Plate</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Length Of Plate Pack 'A' Max /'A'Min</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Inlet/Outlet Connection Details</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>P.C.D.X.I.D.X no. Of Stud</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Distance Of Nozzle Dimensions(Horizontal/Vertical) </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Tightening bolts Size</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>No.Of Bolts</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Foundation Details</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Total Length/Height/Width of PHE</td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Reqd(mm)"></IonInput>
                      </IonItem>
                    </td>
                    <td>
                      <IonItem>
                        <IonInput placeholder="Dimention Observed(mm)"></IonInput>
                      </IonItem>
                    </td>
                  </tr>
                </tbody>
              </table>
            </IonRow>

            <IonRow className="ion-padding">
              <table>
                <caption>
                  <h3>Hydro Test Details</h3>
                </caption>
                <tbody>
                  <tr>
                    <th>Procedure No.</th>
                    <td>
                      <IonInput placeholder=" enter Procedure No."></IonInput>
                    </td>
                    <th>Test Pressure Required</th>
                    <td>
                      <IonInput
                        value={text}
                        onIonChange={(e) => {
                          setText(e.detail.value!);
                        }}
                        placeholder="enter test pressure"
                      ></IonInput>
                    </td>
                  </tr>
                </tbody>
              </table>
            </IonRow>
          </IonGrid>

          <NewInspectionContrl onSubmit={onSubmitHandler}  />
          <Prompt
            when={!!text}
            message="You have unsaved changes, are you sure you want to leave?"
          />
        </IonContent>
      </IonPage>
    </>
  );
};

export default NewInspection;
