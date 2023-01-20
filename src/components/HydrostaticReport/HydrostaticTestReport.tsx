import { IonButton, IonContent, IonGrid, IonPage } from "@ionic/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

const HydrostaticTestReprt: React.FC = () => {
  const location = useLocation();

  const [hydroDetail, setHydroDetail] = useState([
    {
      reportno: "",
      customer: "",
      pdirno: "",
      sono: "",
      date: "",
      model: "",
      mfgsrno: "",
      tagno: "",
      drgno: "",
    },
  ]);

  const lastPath = location.pathname.split("/")[2]; // get only last params

  useEffect(() => {
    axios
      .get(
        "http://" + process.env.REACT_APP_URL + "/api/inspection/" + lastPath
      )
      .then((res) => {
        setHydroDetail([res.data.data]);
      })
      .catch((err) => console.log(err));
  }, [lastPath]);
  return (
    <>
      <table>
        <caption className="ion-padding">
          <h2>
            <strong>HYDROSTATIC TEST REPORT</strong>{" "}
          </h2>
        </caption>
        {hydroDetail.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th>Report No</th>
              <td>{item.reportno}</td>
              <th>Date</th>
              <td>{item.date}</td>
            </tr>
            <tr>
              <th>S.O.No.</th>
              <td>{item.sono}</td>
              <th>MFG.Sr.No.</th>
              <td>{item.mfgsrno}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{item.model}</td>
              <th>Tag No.</th>
              <td>{item.tagno}</td>
            </tr>
            <tr>
              <th>DRG.NO/REV No.</th>
              <td>{item.drgno}</td>
            </tr>
            <tr>
              <th>PDIR.No.</th>
              <td>{item.pdirno}</td>
            </tr>
            <tr>
              <th>Customer</th>
              <td>{item.customer}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default HydrostaticTestReprt;
