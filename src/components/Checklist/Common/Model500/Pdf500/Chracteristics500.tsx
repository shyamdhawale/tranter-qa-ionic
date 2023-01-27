import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Header500 from "./Header500";

import logo1 from "./tranter1.jpg";
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
    actualresult_30: String;
    actualresult_31: String;
    actualresult_32: String;
  };
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: "5px",
    borderTop: 1,
  },
  row: {
    flexDirection: "row",
    // borderBottomColor: '#bff0fd',
    // backgroundColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: "center",
    // height: 44,
    // height: "100%",
    textAlign: "center",
    // flexGrow: 1,
    // flex: 1
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
const Chracteristics500: React.FC<props> = ({ results }) => (
  <View style={{ fontSize: "8px" }}>
    <View>
      <CharactoristicsHeader />
      <View style={styles.row}>
        <Text style={styles.serialnumber}>1</Text>
        <Text style={styles.characteristics}>Total Height Of Skid</Text>
        <Text style={styles.dimension}>1410</Text>
        <Text style={styles.actualresult}>{results.actualresult_1}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>2</Text>
        <Text style={styles.characteristics}>Overall Width Of Skid</Text>
        <Text style={styles.dimension}>605</Text>
        <Text style={styles.actualresult}>{results.actualresult_2}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>3</Text>
        <Text style={styles.characteristics}>Main Frame Height</Text>
        <Text style={styles.dimension}>1410</Text>
        <Text style={styles.actualresult}>{results.actualresult_3}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>4</Text>
        <Text style={styles.characteristics}>Width Of Frame</Text>
        <Text style={styles.dimension}>605</Text>
        <Text style={styles.actualresult}>{results.actualresult_4}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>5</Text>
        <Text style={styles.characteristics}>Length Of Frame</Text>
        <Text style={styles.dimension}>1224-1232</Text>
        <Text style={styles.actualresult}>{results.actualresult_5}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>6</Text>
        <Text style={styles.characteristics} wrap>
          Height Of Raw Outlet Pipe From Base
        </Text>
        <Text style={styles.dimension}>1095-2003</Text>
        <Text style={styles.actualresult}>{results.actualresult_6}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>7</Text>
        <Text style={styles.characteristics}>
          Height From Base To Horizontal Angel(50x6)
        </Text>
        <Text style={styles.dimension}>712-718</Text>
        <Text style={styles.actualresult}>{results.actualresult_7}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>8</Text>
        <Text style={styles.characteristics}>
          Height From Base To Side Support Angel(50x50x5)
        </Text>
        <Text style={styles.dimension}>915-921</Text>
        <Text style={styles.actualresult}>{results.actualresult_8}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>9</Text>
        <Text style={styles.characteristics}>
          Distance From Base To Upper Angel(50x6)
        </Text>
        <Text style={styles.dimension}>1024.5-1033</Text>
        <Text style={styles.actualresult}>{results.actualresult_9}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>10</Text>
        <Text style={styles.characteristics}>
          Center Distance Of Pressure Tank From Frame
        </Text>
        <Text style={styles.dimension}>372-378</Text>
        <Text style={styles.actualresult}>{results.actualresult_10}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>11</Text>
        <Text style={styles.characteristics}>
          Center Distance Of Pressure Tank From Base
        </Text>
        <Text style={styles.dimension}>1846-1854</Text>
        <Text style={styles.actualresult}>{results.actualresult_11}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>12</Text>
        <Text style={styles.characteristics}>
          Center Cap Elevation From Pressure Tank End
        </Text>
        <Text style={styles.dimension}>155-159</Text>
        <Text style={styles.actualresult}>{results.actualresult_12}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>13</Text>
        <Text style={styles.characteristics}>Tapping Holes On Drum </Text>
        <Text style={styles.dimension}>1/4 Inch NPT 10 Places</Text>
        <Text style={styles.actualresult}>{results.actualresult_13}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>14</Text>
        <Text style={styles.characteristics}>
          Center To Center Distance Between Adjacent Cap
        </Text>
        <Text style={styles.dimension}>297-303/397-4003</Text>
        <Text style={styles.actualresult}>{results.actualresult_14}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>15</Text>
        <Text style={styles.characteristics}>
          No Of Eye Bolts/CRS Distance{" "}
        </Text>
        <Text style={styles.dimension}>4/1174-1182 X 747-753</Text>
        <Text style={styles.actualresult}>{results.actualresult_15}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>16</Text>
        <Text style={styles.characteristics}>
          First Foundation Slot Elevation CRS Distance{" "}
        </Text>
        <Text style={styles.dimension}>222-228/198-202</Text>
        <Text style={styles.actualresult}>{results.actualresult_16}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>17</Text>
        <Text style={styles.characteristics}>Number Of Slots/Size</Text>
        <Text style={styles.dimension}>6 No./Dia.14 X 34</Text>
        <Text style={styles.actualresult}>{results.actualresult_17}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>18</Text>
        <Text style={styles.characteristics}>
          LTA & HTA Coolers Frame Plate Elevation From Front Of Skid Frame
        </Text>
        <Text style={styles.dimension}>327-333</Text>
        <Text style={styles.actualresult}>{results.actualresult_18}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>19</Text>
        <Text style={styles.characteristics}>
          Distance From Front Base Channel To Frame Plates
        </Text>
        <Text style={styles.dimension}>327-333(105+225)</Text>
        <Text style={styles.actualresult}>{results.actualresult_19}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>

      <ChecklistSubTitle subtitle="HTA COOLER(Model No.GC-026X26)" />
      <View style={styles.row}>
        <Text style={styles.serialnumber}>20</Text>
        <Text style={styles.characteristics}>Pack Length(HTA)</Text>
        <Text style={styles.dimension}>114-120</Text>
        <Text style={styles.actualresult}>{results.actualresult_20}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.serialnumber}>21</Text>
        <Text style={styles.characteristics}>
          Nozzle Center To Center Length{" "}
        </Text>
        <Text style={styles.dimension}>779</Text>
        <Text style={styles.actualresult}>{results.actualresult_21}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>22</Text>
        <Text style={styles.characteristics}>
          Nozzle Center To Center Width
        </Text>
        <Text style={styles.dimension}>230</Text>
        <Text style={styles.actualresult}>{results.actualresult_22}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>23</Text>
        <Text style={styles.characteristics}>Nozzle Size/PCD</Text>
        <Text style={styles.dimension}>OD 100/190.5</Text>
        <Text style={styles.actualresult}>{results.actualresult_23}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.serialnumber}>24</Text>
        <Text style={styles.characteristics}>
          Height From Base To M2 Center (Cold Water Outlet){" "}
        </Text>
        <Text style={styles.dimension}>317-323</Text>
        <Text style={styles.actualresult}>{results.actualresult_24}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View break></View>
      <CharactoristicsHeader />
      <View style={styles.row}>
        <Text style={styles.serialnumber}>25</Text>
        <Text style={styles.characteristics}>
          Tapping Hole On Pipe Raw Water Outlet
        </Text>
        <Text style={styles.dimension}>1/2 Inch NPT 5 Places</Text>
        <Text style={styles.actualresult}>{results.actualresult_25}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <ChecklistSubTitle subtitle="LTA COOLER(Model No.GC-026X52)" />
      <View style={styles.row}>
        <Text style={styles.serialnumber}>26</Text>
        <Text style={styles.characteristics}>Pack Length</Text>
        <Text style={styles.dimension}>130-136</Text>
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
        <Text style={styles.dimension}>303</Text>
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
        <Text style={styles.dimension}>135</Text>
        <Text style={styles.actualresult}>{results.actualresult_28}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>29</Text>
        <Text style={styles.characteristics}>Nozzle Size</Text>
        <Text style={styles.dimension}>OD 38.1</Text>
        <Text style={styles.actualresult}>{results.actualresult_29}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>30</Text>
        <Text style={styles.characteristics}>
          Height From Base To Center Of Pipe Raw Water Inlet (LTA)
        </Text>
        <Text style={styles.dimension}>620-626 (320+303)</Text>
        <Text style={styles.actualresult}>{results.actualresult_30}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>31</Text>
        <Text style={styles.characteristics}>
          Tapping Hole On HTA LTA Interconnecting Pipe
        </Text>
        <Text style={styles.dimension}>1/8 Inch NPT 4 Places</Text>
        <Text style={styles.actualresult}>{results.actualresult_31}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.serialnumber}>32</Text>
        <Text style={styles.characteristics}>
          Distance From Front End To Center Of Make Pipe(38 Od) Of Tank
        </Text>
        <Text style={styles.dimension}>267-273</Text>
        <Text style={styles.actualresult}>{results.actualresult_32}</Text>
        <Text style={styles.classification}>M2</Text>
        <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
        <Text style={styles.remarks}>Accepted</Text>
      </View>
    </View>
  </View>
);

export default Chracteristics500;
