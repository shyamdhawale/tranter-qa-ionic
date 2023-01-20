import React from "react";
import { IonGrid, IonInput, IonRow } from "@ionic/react";
import { useFormContext } from "react-hook-form";

const dimentionData = [
  {
    seq: 1,
    label1: "Total Height Of Skid",
    type1: "text",
    required1: true,

    label2: "2176-2184",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_1",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 2,
    label1: "Overall Width Of Skid",
    type1: "text",
    required1: true,

    label2: "1051-1059",
    type2: "text",
    required2: true,
    propsActualResult: {
      name: "actualresult_2",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 3,
    label1: "Main Frame Height",
    type1: "text",
    required1: true,

    label2: "1676-1684",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_3",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 4,
    label1: "Lenth Of Frame",
    type1: "text",
    required1: true,

    label2: "1496-1504",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_4",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 5,
    label1:
      " Center Distance Between Raw WaterOutlet At PHE to RAW WaterInlet At HTA PHE",
    type1: "text",
    required1: true,

    label2: "527-533",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_5",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 6,
    label1:
      "Distance From Base To Center HT Water Outlet/RAW Water Outlet/LT Water Outlet/RAW Water Inlet",
    type1: "text",
    required1: true,

    label2: "317-323",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_6",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 7,
    label1: "Distance between RAW Water Outlet(HTA) To LT Water Outlet(LTA)",
    type1: "text",
    required1: true,

    label2: "413-419",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_7",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 8,
    label1: "Distance Of Lt Water Outlet From Base Plate",
    type1: "text",
    required1: true,

    label2: "162-166",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_8",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 9,
    label1:
      "Distance From Base To Horizontal Channel (100x50) At Front /Back Side",
    type1: "text",
    required1: true,

    label2: "797-803",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_9",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 10,
    label1: "Distance Frame Plate To Front Base Channel",
    type1: "text",
    required1: true,

    label2: "367-373",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_10",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 11,
    label1: "Elevation Of MakeUp Water Tank(LTA)From Frame",
    type1: "text",
    required1: true,

    label2: "319-325",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_11",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 12,
    label1:
      "Center Distance Between Of MakeUp Water Tank(LTA)To MakeUp Water Tank(HTA)",
    type1: "text",
    required1: true,

    label2: "747-753",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_12",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 13,
    label1: "No Of Eye Bolts",
    type1: "text",
    required1: true,

    label2: "4",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_13",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 14,
    label1: "First Foundation Slot Elevation & CRS Distance",
    type1: "text",
    required1: true,

    label2: "152-158/ 248-252",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_14",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 15,
    label1: "Number Of Slots/Size",
    type1: "text",
    required1: true,

    label2: "8 Nos./Dia.14X34",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_15",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: "",
    label1: "HTA COOLER(Model No.GC-026X26)",
    type1: "text",
    required1: true,

    label2: "",
    type2: "text",
    required2: false,

    propsActualResult: {
      name: "dummy",
      placeholder: "",
      disabled: true,
    },
  },
  {
    seq: 16,
    label1: "Pack Length",
    type1: "text",
    required1: true,

    label2: "115-120",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_16",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 17,
    label1: "Nozzle Center To Center Length",
    type1: "text",
    required1: true,

    label2: "779",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_17",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 18,
    label1: "Nozzle Center To Center Width",
    type1: "text",
    required1: true,

    label2: "230",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_18",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 19,
    label1: "Nozzle Size/PCD/Qty No.",
    type1: "text",
    required1: true,

    label2: "OD 100/190.5/4",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_19",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 20,
    label1: "ELEVATION Of HT/RAW WaterOutlet From Base",
    type1: "text",
    required1: true,

    label2: "317-323",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_20",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: "",
    label1: "LTA COOLER(Model No.GC-026X52",
    type1: "text",
    required1: true,

    label2: "",
    type2: "text",
    required2: false,

    propsActualResult: {
      name: "dummy",
      placeholder: "",
      disabled: true,
    },
  },
  {
    seq: 21,
    label1: "Pack Length",
    type1: "text",
    required1: true,

    label2: "231-237",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_21",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 22,
    label1: "Nozzle Center To Center Length",
    type1: "text",
    required1: true,

    label2: "779",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_22",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 23,
    label1: "Nozzle Center To Center Width",
    type1: "text",
    required1: true,

    label2: "230",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_23",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 24,
    label1: "Nozzle Size/PCD/Qty No.",
    type1: "text",
    required1: true,

    label2: "OD 100/190.5/4",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_24",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 25,
    label1: "ELEVATION Of HT/RAW WaterOutlet From Base",
    type1: "text",
    required1: true,

    label2: "317-323",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_25",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: "",
    label1: "FUEL COOLER(Model No.GC-008X32",
    type1: "text",
    required1: true,

    label2: "",
    type2: "text",
    required2: false,

    propsActualResult: {
      name: "dummy",
      placeholder: "",
      disabled: true,
    },
  },
  {
    seq: 26,
    label1: "Pack Length(Lta)",
    type1: "text",
    required1: true,

    label2: "231-237",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_26",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 27,
    label1: "Nozzle Center To Center Length",
    type1: "text",
    required1: true,

    label2: "640",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_27",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 28,
    label1: "Nozzle Center To Center Width",
    type1: "text",
    required1: true,

    label2: "60",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_28",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 29,
    label1: "Nozzle Size/PCD/Qty No.",
    type1: "text",
    required1: true,

    label2: "1.0''BSP SOCKET/ 4 No.",
    type2: "text",
    required2: true,

    propsActualResult: {
      name: "actualresult_29",
      placeholder: "Enter Actual Result",
    },
  },
];

const Model2000Characteristics: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <IonGrid className="col-sm-auto">
      <IonRow className="ion-padding">
        <table>
          <tbody>
            <tr>
              <th>Sr. No</th>
              <th>Characteristics</th>
              <th>Dimention Reqd. (mm)</th>
              <th>Actual Results</th>
            </tr>
            {dimentionData.map((fields, index) => {
              return (
                <tr key={`form_dimention_${index}`}>
                  <td style={{ maxWidth: "1px" }}>{fields.seq}</td>
                  <td>{fields.label1}</td>
                  <td>{fields.label2}</td>
                  <td>
                    <IonInput
                      className="custom"
                      {...fields.propsActualResult}
                      type={
                        fields.type1 === "number"
                          ? "number"
                          : fields.type2 === "date"
                          ? "date"
                          : "text"
                      }
                      {...register(fields.propsActualResult.name, {
                        required: fields.required1,
                      })}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </IonRow>
    </IonGrid>
  );
};

export default Model2000Characteristics;
