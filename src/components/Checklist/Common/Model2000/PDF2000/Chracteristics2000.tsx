import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import CharactoristicsHeader from "../../CharactoristicsHeader";
import ChecklistSubTitle from "../../ChecklistSubTitle";

interface props {
  results: {
    actualresult_1: String;
    actualresult_2: String;
    actualresult_3: String;
    actualresult_4: String;
    actualresult_5: String;
    actualresult_6: String;
    actualresult_7: String;
    actualresult_8: String;
    actualresult_9: String;
    actualresult_10: String;
    actualresult_11: String;
    actualresult_12: String;
    actualresult_13: String;
    actualresult_14: String;
    actualresult_15: String;
    actualresult_16: String;
    actualresult_17: String;
    actualresult_18: String;
    actualresult_19: String;
    actualresult_20: String;
    actualresult_21: String;
    actualresult_22: String;
    actualresult_23: String;
    actualresult_24: String;
    actualresult_25: String;
    actualresult_26: String;
    actualresult_27: String;
    actualresult_28: String;
    actualresult_29: String;
  };
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: "5px",
    borderTop: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    // borderBottomColor: '#bff0fd',

    borderBottomWidth: 1,
    // border: 1
  },
  serialnumber: {
    width: "5%",
    height: "100%",
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: 5,
  },
  characteristics: {
    width: "25%",
    height: "100%",
    borderRightWidth: 1,
    textAlign: "left",
    // paddingLeft: 5,
    // paddingRight: 5,
    padding: 5,
  },
  dimension: {
    width: "15%",
    height: "100%",
    borderRightWidth: 1,
    padding: 5,
    // flex: 1,
    // display: 'block',
    // flexGrow: 1,
    // flexWrap: "wrap"
  },
  actualresult: {
    width: "15%",
    height: "100%",
    borderRightWidth: 1,
    padding: 5,
  },
  classification: {
    width: "10%",
    height: "100%",
    borderRightWidth: 1,
    padding: 5,
  },
  equipmenttobeused: {
    width: "15%",
    height: "100%",
    borderRightWidth: 1,
    padding: 5,
  },
  remarks: {
    width: "15%",
    height: "100%",
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    padding: 5,
  },
});
const Chracteristics2000: React.FC<props> = ({ results }) => {
  return (
    <View>
      <View
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: "extrabold",
        }}
      ></View>

      <View>
        <CharactoristicsHeader />

        <View style={styles.row}>
          <Text style={styles.serialnumber}>1</Text>
          <Text style={styles.characteristics}>Total Height Of Skid</Text>
          <Text style={styles.dimension}>2180 ±4</Text>
          <Text style={styles.actualresult}>{results.actualresult_1}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>2</Text>
          <Text style={styles.characteristics}>Overall Width Of Skid</Text>
          <Text style={styles.dimension}>1051-1059</Text>
          <Text style={styles.actualresult}>{results.actualresult_2}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>3</Text>
          <Text style={styles.characteristics}>Main Frame Height</Text>
          <Text style={styles.dimension}>1676-1684</Text>
          <Text style={styles.actualresult}>{results.actualresult_3}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>4</Text>
          <Text style={styles.characteristics}>Lenth Of Frame</Text>
          <Text style={styles.dimension}>1496-1504</Text>
          <Text style={styles.actualresult}>{results.actualresult_4}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>5</Text>
          <Text style={styles.characteristics}>
            Center Distance Between Raw WaterOutlet At PHE to RAW WaterInlet At
            HTA PHE
          </Text>
          <Text style={styles.dimension}>527-533</Text>
          <Text style={styles.actualresult}>{results.actualresult_5}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>6</Text>
          <Text style={styles.characteristics} wrap>
            Distance From Base To Center HT Water Outlet/RAW Water Outlet/LT
            Water Outlet/RAW Water Inlet
          </Text>
          <Text style={styles.dimension}>317-323</Text>
          <Text style={styles.actualresult}>{results.actualresult_6}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>7</Text>
          <Text style={styles.characteristics}>
            Distance between RAW Water Outlet(HTA) To LT Water Outlet(LTA)
          </Text>
          <Text style={styles.dimension}>413-419</Text>
          <Text style={styles.actualresult}>{results.actualresult_7}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>8</Text>
          <Text style={styles.characteristics}>
            Distance Of Lt Water Outlet From Base Plate
          </Text>
          <Text style={styles.dimension}>162-166</Text>
          <Text style={styles.actualresult}>{results.actualresult_8}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>9</Text>
          <Text style={styles.characteristics}>
            Distance From Base To Horizontal Channel (100x50) At Front /Back
            Side
          </Text>
          <Text style={styles.dimension}>797-803</Text>
          <Text style={styles.actualresult}>{results.actualresult_9}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>10</Text>
          <Text style={styles.characteristics}>
            Distance Frame Plate To Front Base Channel
          </Text>
          <Text style={styles.dimension}>367-373</Text>
          <Text style={styles.actualresult}>{results.actualresult_10}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>11</Text>
          <Text style={styles.characteristics}>
            Elevation Of MakeUp Water Tank(LTA)From Frame
          </Text>
          <Text style={styles.dimension}>2319-325</Text>
          <Text style={styles.actualresult}>{results.actualresult_11}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>12</Text>
          <Text style={styles.characteristics}>
            Center Distance Between Of MakeUp Water Tank(LTA)To MakeUp Water
            Tank(HTA)
          </Text>
          <Text style={styles.dimension}>747-753</Text>
          <Text style={styles.actualresult}>{results.actualresult_12}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>13</Text>
          <Text style={styles.characteristics}>No Of Eye Bolts</Text>
          <Text style={styles.dimension}>4</Text>
          <Text style={styles.actualresult}>{results.actualresult_13}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>14</Text>
          <Text style={styles.characteristics}>
            First Foundation Slot Elevation & CRS Distance
          </Text>
          <Text style={styles.dimension}>152-158/ 248-252</Text>
          <Text style={styles.actualresult}>{results.actualresult_14}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>15</Text>
          <Text style={styles.characteristics}>Number Of Slots/Size</Text>
          <Text style={styles.dimension}>8 Nos./Dia.14X34</Text>
          <Text style={styles.actualresult}>{results.actualresult_15}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View break></View>
        <CharactoristicsHeader />
        <ChecklistSubTitle subtitle="HTA COOLER (Model No. GC-026X26)" />
        <View style={styles.row}>
          <Text style={styles.serialnumber}>16</Text>
          <Text style={styles.characteristics}>Pack Length</Text>
          <Text style={styles.dimension}>115-120</Text>
          <Text style={styles.actualresult}>{results.actualresult_16}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>17</Text>
          <Text style={styles.characteristics}>
            Nozzle Center To Center Length
          </Text>
          <Text style={styles.dimension}>779</Text>
          <Text style={styles.actualresult}>{results.actualresult_17}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>18</Text>
          <Text style={styles.characteristics}>
            Nozzle Center To Center Width
          </Text>
          <Text style={styles.dimension}>230</Text>
          <Text style={styles.actualresult}>{results.actualresult_18}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>19</Text>
          <Text style={styles.characteristics}>Nozzle Size/PCD/Qty No.</Text>
          <Text style={styles.dimension}>OD 100/190.5/4</Text>
          <Text style={styles.actualresult}>{results.actualresult_19}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>20</Text>
          <Text style={styles.characteristics}>
            ELEVATION Of HT/RAW WaterOutlet From Base
          </Text>
          <Text style={styles.dimension}>317-323</Text>
          <Text style={styles.actualresult}>{results.actualresult_20}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <ChecklistSubTitle subtitle="LTA COOLER (Model No. GC-026X52)" />
        <View style={styles.row}>
          <Text style={styles.serialnumber}>21</Text>
          <Text style={styles.characteristics}>Pack Length</Text>
          <Text style={styles.dimension}>231-237</Text>
          <Text style={styles.actualresult}>{results.actualresult_21}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>22</Text>
          <Text style={styles.characteristics}>
            Nozzle Center To Center Length
          </Text>
          <Text style={styles.dimension}>779</Text>
          <Text style={styles.actualresult}>{results.actualresult_22}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>23</Text>
          <Text style={styles.characteristics}>
            Nozzle Center To Center Width
          </Text>
          <Text style={styles.dimension}>230</Text>
          <Text style={styles.actualresult}>{results.actualresult_23}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>24</Text>
          <Text style={styles.characteristics}>Nozzle Size/PCD/Qty No.</Text>
          <Text style={styles.dimension}>OD 100/190.5/4</Text>
          <Text style={styles.actualresult}>{results.actualresult_24}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>25</Text>
          <Text style={styles.characteristics}>
            ELEVATION Of LT WaterOutlet /RAW Water Inlet From Base
          </Text>
          <Text style={styles.dimension}>317-323</Text>
          <Text style={styles.actualresult}>{results.actualresult_25}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        {/* Subtitle */}
        <ChecklistSubTitle subtitle="FUAL COOLER (Model No. GC-008X32)" />

        <View style={styles.row}>
          <Text style={styles.serialnumber}>26</Text>
          <Text style={styles.characteristics}>Pack Length</Text>
          <Text style={styles.dimension}>80-83</Text>
          <Text style={styles.actualresult}>{results.actualresult_26}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>27</Text>
          <Text style={styles.characteristics}>
            Nozzle Center To Center Length
          </Text>
          <Text style={styles.dimension}>640</Text>
          <Text style={styles.actualresult}>{results.actualresult_27}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>28</Text>
          <Text style={styles.characteristics}>
            Nozzle Center To Center Width
          </Text>
          <Text style={styles.dimension}>60</Text>
          <Text style={styles.actualresult}>{results.actualresult_28}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>29</Text>
          <Text style={styles.characteristics}>Nozzle Size/PCD/Qty No.</Text>
          <Text style={styles.dimension}>1.0''BSP SOCKET/4No.</Text>
          <Text style={styles.actualresult}>{results.actualresult_29}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
      </View>
    </View>
  );
};

export default Chracteristics2000;
