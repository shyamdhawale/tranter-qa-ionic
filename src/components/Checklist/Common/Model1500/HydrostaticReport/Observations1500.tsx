import React from "react";
import { useFormContext } from "react-hook-form";
import {
  IonInput,
  IonRow,
  IonText,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

const Observations1500: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <IonRow className="ion-padding">
      <table>
        <caption>
          <h3>OBSERVATIONS:</h3>
        </caption>
        <tbody>
          <tr>
            <th>HYDRO SIDE</th>
            <th>GAUGE ID NO.</th>
            <th>
              GAUGE RANGE KG/CM<sup>2</sup>{" "}
            </th>
            <th>CALIBRATION VALID UPTO</th>
            <th>
              OBSERVED PRESSURE KG/CM<sup>2</sup>
            </th>
          </tr>

          <tr>
            <td>
              <b>Hot Side</b>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="Enter guageid no "
                {...register("hyd_obs_gaugeidno_1")}
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="Enter guage range"
                {...register("hyd_obs_guagerange_1")}
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="Enter calibration valid"
                {...register("hyd_obs_calibrationvalid_1")}
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="enter observed pressure"
                {...register("hyd_obs_observedpressure_1")}
              ></IonInput>
            </td>
          </tr>
          <tr>
            <td>
              <b>Cold Side</b>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="enter guageid no "
                {...register("hyd_obs_gaugeidno_2")}
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="enter guage range"
                {...register("hyd_obs_guagerange_2")}
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="enter calibration valid"
                {...register("hyd_obs_calibrationvalid_2")}
              ></IonInput>
            </td>
            <td>
              <IonInput
                type="text"
                placeholder="enter observed pressure"
                {...register("hyd_obs_observedpressure_2")}
              ></IonInput>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>
          <h6>VISUAL INSPECTION: </h6>
        </caption>
        <tbody>
          <tr>
            <td>
              <IonRow className="visualCheckbox">
                <IonText style={{ marginLeft: "10px" }}>
                  NO LEAKAGES OBSERVED
                </IonText>
                <IonSelect
                  {...register("hyd_obs_visual_noleakobs")}
                  placeholder="select"
                >
                  <IonSelectOption value="yes">Yes</IonSelectOption>
                  <IonSelectOption value="no">No</IonSelectOption>
                </IonSelect>
              </IonRow>
              <IonRow className="visualCheckbox">
                <IonText style={{ marginLeft: "10px" }}>
                  LEAKAGES OBSERVED
                </IonText>
                <IonSelect
                  {...register("hyd_obs_visual_leakobs")}
                  placeholder="select"
                >
                  <IonSelectOption value="yes">Yes</IonSelectOption>
                  <IonSelectOption value="no">No</IonSelectOption>
                </IonSelect>
              </IonRow>
              <IonRow className="visualCheckbox">
                <IonText style={{ marginLeft: "10px" }}>
                  NO VISIBLE PERMANENT DISTORTION OBSERVED
                </IonText>
                <IonSelect
                  {...register("hyd_obs_visual_novisiblepermanentobs")}
                  placeholder="select"
                >
                  <IonSelectOption value="yes">Yes</IonSelectOption>
                  <IonSelectOption value="no">No</IonSelectOption>
                </IonSelect>
              </IonRow>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <IonRow>
          HYDROSTATIC TEST FOUND :-
          <IonRow>
            <IonRow className="visualCheckbox">
              <IonText style={{ marginLeft: "10px" }}>SATISFACTORY</IonText>
              <IonSelect
                {...register("hyd_obs_dicision_satisfactory")}
                placeholder="select"
              >
                <IonSelectOption value="yes">Yes</IonSelectOption>
                <IonSelectOption value="no">No</IonSelectOption>
              </IonSelect>
            </IonRow>
            <IonRow className="visualCheckbox">
              <IonText style={{ marginLeft: "10px" }}>UNSATISFACTORY</IonText>
              <IonSelect
                {...register("hyd_obs_dicision_unsatisfactory")}
                placeholder="select"
              >
                <IonSelectOption value="yes">Yes</IonSelectOption>
                <IonSelectOption value="no">No</IonSelectOption>
              </IonSelect>
            </IonRow>
            <IonRow>
              <IonRow className="visualCheckbox">
                <IonText>
                  VERIFIED PRESESSURE GAUAGE (S) AFTER PRESSURE TEST.
                </IonText>
                <IonSelect
                  {...register("hyd_obs_dicision_verifypresuretest")}
                  placeholder="select"
                >
                  <IonSelectOption value="yes">Yes</IonSelectOption>
                  <IonSelectOption value="no">No</IonSelectOption>
                </IonSelect>
              </IonRow>
            </IonRow>
          </IonRow>
        </IonRow>
      </div>
    </IonRow>
  );
};

export default Observations1500;
