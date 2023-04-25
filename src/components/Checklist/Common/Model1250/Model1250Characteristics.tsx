import React from "react";
import {
  IonGrid,
  IonInput,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const dimentionData = [
  {
    seq: 1,
    label1: "Total Height of Skid",
    type1: "text",
    required1: true,

    label2: "2126-2134",
    type2: "number",
    required2: true,
    dimension: "2130",
    add: "±4",
    isrange: true,
    minvalue: 2126,
    maxvalue: 2134,

    options: true,
    optionsrange: [2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134],

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

    label2: "1071-1079",
    type2: "number",
    required2: true,
    dimension: "1075",
    add: "±4",
    isrange: true,
    minvalue: 1071,
    maxvalue: 1079,

    options: true,
    optionsrange: [1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079],

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

    label2: "1581-1589",
    type2: "number",
    required2: true,
    dimension: "1585",
    add: "±4",
    isrange: true,
    minvalue: 1581,
    maxvalue: 1589,

    options: true,
    optionsrange: [1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589],

    propsActualResult: {
      name: "actualresult_3",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 4,
    label1: "Width Of Frame",
    type1: "text",
    required1: true,

    label2: "847-853",
    type2: "number",
    required2: true,
    dimension: "850",
    add: "±3",

    isrange: true,
    minvalue: 847,
    maxvalue: 853,

    options: true,
    optionsrange: [847, 848, 849, 850, 851, 852, 853],

    propsActualResult: {
      name: "actualresult_4",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 5,
    label1: "Length Of Frame",
    type1: "text",
    required1: true,

    label2: "1224-1232",
    type2: "number",
    required2: true,
    dimension: "1228",
    add: "±4",

    isrange: true,
    minvalue: 1224,
    maxvalue: 1232,

    options: true,
    optionsrange: [1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232],

    propsActualResult: {
      name: "actualresult_5",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 6,
    label1: "Height Of Raw Outlet Pipe From Base",
    type1: "text",
    required1: true,

    label2: "1095-2003",
    type2: "number",
    required2: true,
    dimension: "1099",
    add: "±4",
    isrange: true,
    minvalue: 1095,
    maxvalue: 2003,

    options: true,
    optionsrange: [1095, 1096, 1097, 1098, 1099, 2000, 2001, 2002, 2003],

    propsActualResult: {
      name: "actualresult_6",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 7,
    label1: "Height From Base To Horizontal Angel(50x6)",
    type1: "text",
    required1: true,

    label2: "712-718",
    type2: "number",
    required2: true,
    dimension: "715",
    add: "±3",
    isrange: true,
    minvalue: 712,
    maxvalue: 718,

    options: true,
    optionsrange: [712, 713, 714, 715, 716, 717, 718],

    propsActualResult: {
      name: "actualresult_7",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 8,
    label1: "Height From Base To Side Support Angel(50x50x5)",
    type1: "text",
    required1: true,

    label2: "925-931",
    type2: "number",
    required2: true,
    dimension: "928",
    add: "±3",
    isrange: true,
    minvalue: 925,
    maxvalue: 931,
    options: true,
    optionsrange: [925, 926, 927, 928, 929, 930, 931],

    propsActualResult: {
      name: "actualresult_8",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 9,
    label1: "Distance From Base To Upper Angel(50x6)",
    type1: "text",
    required1: true,

    label2: "1246-1254",
    type2: "number",
    required2: true,
    dimension: "1250",
    add: "±4",
    isrange: true,
    minvalue: 1246,
    maxvalue: 1254,

    options: true,
    optionsrange: [1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254],

    propsActualResult: {
      name: "actualresult_9",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 10,
    label1: "Center Distance Of Pressure Tank From Frame",
    type1: "text",
    required1: true,

    label2: "372-378",
    type2: "number",
    required2: true,
    dimension: "375",
    add: "±3",
    isrange: true,
    minvalue: 372,
    maxvalue: 378,

    options: true,
    optionsrange: [372, 373, 374, 375, 376, 377, 378],

    propsActualResult: {
      name: "actualresult_10",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 11,
    label1: "Center Distance Of Pressure Tank From Base",
    type1: "text",
    required1: true,

    label2: "1846-1854",
    type2: "number",
    required2: true,
    dimension: "1850",
    add: "±4",
    isrange: true,
    minvalue: 1846,
    maxvalue: 1854,

    options: true,
    optionsrange: [1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854],

    propsActualResult: {
      name: "actualresult_11",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 12,
    label1: "Center Cap Elevation From Pressure Tank End",
    type1: "text",
    required1: true,

    label2: "155-159",
    type2: "number",
    required2: true,
    dimension: "157",
    add: "±2",
    isrange: true,
    minvalue: 155,
    maxvalue: 159,

    options: true,
    optionsrange: [155, 156, 157, 158, 159],

    propsActualResult: {
      name: "actualresult_12",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 13,
    label1: "Tapping Holes On Drum",
    type1: "text",
    required1: true,

    label2: "1/4 Inch NPT 5 Places",
    type2: "text",
    required2: true,
    dimension: "1/4 Inch NPT 5 Places",
    add: "",

    isReadonly: true,
    defaultValue: "1/4 Inch NPT 5 Places",

    isrange: false,
    options: false,
    optionsrange: [],

    propsActualResult: {
      name: "actualresult_13",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 14,
    label1: "Center To Center Distance Between Adjacent Cap",
    type1: "text",
    required1: true,

    label2: "697-703",
    type2: "number",
    required2: true,
    dimension: "700",
    add: "±3",
    isrange: true,
    minvalue: 697,
    maxvalue: 703,

    options: true,
    optionsrange: [697, 698, 699, 700, 701, 702, 703],

    propsActualResult: {
      name: "actualresult_14",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 15,
    label1: "No of Eye Bolts/CRS Distance",
    type1: "text",
    required1: true,

    label2: "4/1174-1182 X 747-753",
    type2: "text",
    required2: true,
    dimension: "4/1174-1182 ",
    add: "±4",

    dimension2: "X 747-753",
    add2: "±3",
    isrange: false,

    propsActualResult: {
      name: "actualresult_15",
      placeholder: "Enter Actual Result",
    },
  },

  {
    seq: 16,
    label1: "First Foundation Slot Elevation CRS Distance",
    type1: "text",
    required1: true,

    label2: "225±3/200±2",
    type2: "text",
    required2: true,
    dimension: "225",
    add: "±3",
    dimention2: "/ 200",
    add2: "±2",
    isrange: false,

    propsActualResult: {
      name: "actualresult_16",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 17,
    label1: "Number Of Slots/Size",
    type1: "text",
    required1: true,

    label2: "6 No./Dia.14 X 34",
    type2: "text",
    required2: true,
    dimension: "6 Nos./ Dia. 14X34",
    add: "",
    isrange: false,
    isReadonly: true,
    defaultValue: "6 No./Dia.14 X 34",

    propsActualResult: {
      name: "actualresult_17",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 18,
    label1: "LTA & HTA Coolers Frame Plate Elevation From Front Of Skid Frame",
    type1: "text",
    required1: true,

    label2: "330",
    type2: "number",
    required2: true,
    dimension: "330",
    add: "±3",
    isrange: true,
    minvalue: 327,
    maxvalue: 333,
    options: true,
    optionsrange: [327, 328, 329, 330, 331, 332, 333],

    propsActualResult: {
      name: "actualresult_18",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 19,
    label1: "Distance From Front Base Channel To Frame Plates",
    type1: "text",
    required1: true,

    label2: "327-333(105+225)",
    type2: "text",
    required2: true,
    dimension: "330",
    add: "±3",
    dimension2: " (105 +225)",
    add2: "",
    isrange: false,

    options: true,
    optionsrange: [327, 328, 329, 330, 331, 332, 333],

    propsActualResult: {
      name: "actualresult_19",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: "",
    label1: "HTA COOLER(Model No. GC-026X26",
    type1: "text",
    required1: true,

    label2: "",
    type2: "text",
    required2: false,

    isrange: false,

    propsActualResult: {
      name: "dummy",
      placeholder: "",
      disabled: true,
    },
  },
  {
    seq: 20,
    label1: "Pack Length (HTA)",
    type1: "text",
    required1: true,

    label2: "114-120",
    type2: "number",
    required2: true,
    dimension: "117",
    add: "±3",
    isrange: true,
    minvalue: 114,
    maxvalue: 120,

    options: true,
    optionsrange: [114, 115, 116, 117, 118, 119, 120],

    propsActualResult: {
      name: "actualresult_20",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 21,
    label1: "Nozzle Center To Center Length",
    type1: "text",
    required1: true,

    label2: "779",
    type2: "text",
    required2: true,
    dimension: "779",
    add: "",
    isrange: true,
    minvalue: 779,
    maxvalue: 779,
    options: true,
    optionsrange: [779],
    propsActualResult: {
      name: "actualresult_21",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 22,
    label1: "Nozzle Center To Center Width",
    type1: "text",
    required1: true,

    label2: "230",
    type2: "text",
    required2: true,
    dimension: "230",
    add: "",
    isrange: true,
    minvalue: 230,
    maxvalue: 230,
    options: true,
    optionsrange: [230],

    propsActualResult: {
      name: "actualresult_22",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 23,
    label1: "Nozzle Size/PCD",
    type1: "text",
    required1: true,

    label2: "OD 100/190.5",
    type2: "text",
    required2: true,
    dimension: "OD 100/190.5",
    add: "",
    isReadonly: true,
    defaultValue: "OD 100/190.5",

    propsActualResult: {
      name: "actualresult_23",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 24,
    label1: "Height From Base To M2 Centre (Cold Water Outlet)",
    type1: "text",
    required1: true,

    label2: "317-323",
    type2: "number",
    required2: true,
    dimension: "320",
    add: "±3",
    isrange: true,
    minvalue: 317,
    maxvalue: 323,
    options: true,
    optionsrange: [317, 318, 319, 320, 321, 322, 323],

    propsActualResult: {
      name: "actualresult_24",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 25,
    label1: "Tapping Hole On Pipe Raw Water Outlet ",
    type1: "text",
    required1: true,

    label2: "1/2 Inch NPT 5 Places",
    type2: "text",
    required2: true,
    dimension: "1/2 Inch NPT 5 Places",
    add: "",
    isrange: false,

    isReadonly: true,
    defaultValue: "1/2 Inch NPT 5 Places",

    propsActualResult: {
      name: "actualresult_25",
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
    seq: 26,
    label1: "Pack Length(LTA)",
    type1: "text",
    required1: true,

    label2: "130-136",
    type2: "number",
    required2: true,
    dimension: "133",
    add: "±3",

    isrange: true,
    minvalue: 130,
    maxvalue: 136,
    options: true,
    optionsrange: [130, 131, 132, 133, 134, 135, 136],

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

    label2: "303",
    type2: "number",
    required2: true,
    dimension: "303",
    add: "",
    isrange: true,
    minvalue: 303,
    maxvalue: 303,
    options: true,
    optionsrange: [303],

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

    label2: "135",
    type2: "number",
    required2: true,
    dimension: "135",
    add: "",
    isrange: true,
    minvalue: 135,
    maxvalue: 135,

    options: true,
    optionsrange: [135],

    propsActualResult: {
      name: "actualresult_28",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 29,
    label1: "Nozzle Size",
    type1: "text",
    required1: true,

    label2: "OD 38.1",
    type2: "text",
    required2: true,
    dimension: "OD 38.1",
    add: "",
    isReadonly: true,
    defaultValue: "OD 38.1",

    isrange: false,

    propsActualResult: {
      name: "actualresult_29",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 30,
    label1: "Height From Base To Center Of Pipe Raw Water Inlet (LTA)",
    type1: "text",
    required1: true,

    label2: "620-626 (320+303)",
    type2: "number",
    required2: true,
    dimension: "623",
    add: "±3",
    dimension2: " (320 +303",
    add2: "",
    isrange: true,
    minvalue: 620,
    maxvalue: 626,

    options: true,
    optionsrange: [620, 621, 622, 623, 624, 625, 626],

    propsActualResult: {
      name: "actualresult_30",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 31,
    label1: "Tapping Hole On HTA LTA Interconnecting Pipe",
    type1: "text",
    required1: true,

    label2: "1/8 Inch NPT 4 Places",
    type2: "text",
    required2: true,
    dimension: "1/8 Inch NPT 4 Places",
    add: "",

    isReadonly: true,
    defaultValue: "1/8 Inch NPT 4 Places",

    propsActualResult: {
      name: "actualresult_31",
      placeholder: "Enter Actual Result",
    },
  },
  {
    seq: 32,
    label1: "Distance From Front End To Center Of Make Pipe (38 Od) Of Tank",
    type1: "text",
    required1: true,

    label2: "267-273",
    type2: "number",
    required2: true,
    dimension: "270",
    add: "±3",
    isrange: true,
    minvalue: 267,
    maxvalue: 273,

    options: true,
    optionsrange: [267, 268, 269, 270, 271, 272, 273],

    propsActualResult: {
      name: "actualresult_32",
      placeholder: "Enter Actual Result",
    },
  },
];

const Model1250Characteristics: React.FC = () => {
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
                  <td>
                    {fields.dimension}
                    <sup>{fields.add}</sup>
                    {fields.dimension2}
                    <sup>{fields.add2}</sup>
                  </td>
                  <td>
                    {fields.options ? (
                      <IonSelect
                        {...register(fields.propsActualResult.name)}
                        placeholder="Select Option"
                      >
                        {fields.optionsrange.map((a) => (
                          <IonSelectOption key={a} value={a}>
                            {a}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    ) : (
                      <IonInput
                        className="custom"
                        {...fields.propsActualResult}
                        type={
                          fields.type1 === "number"
                            ? "number"
                            : fields.type2 === "number"
                            ? "number"
                            : "text"
                        }
                        readonly={fields.isReadonly}
                        value={fields.defaultValue}
                        {...register(fields.propsActualResult.name, {
                          required: fields.required1,
                          min: fields.isrange ? fields.minvalue : undefined,
                          max: fields.isrange ? fields.maxvalue : undefined,
                        })}
                      />
                    )}

                    <ErrorMessage
                      errors={errors}
                      name={fields.propsActualResult.name}
                      render={({ message }) => (
                        <p style={{ color: "red" }}>Value in not in range</p>
                      )}
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

export default Model1250Characteristics;
