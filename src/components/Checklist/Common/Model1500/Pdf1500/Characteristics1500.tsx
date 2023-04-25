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
    actualresult_30: String;
    actualresult_31: String;
    actualresult_32: String;
    actualresult_33: String;
    actualresult_34: String;
    actualresult_35: String;
    actualresult_36: String;
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
const Chracteristics1500: React.FC<props> = ({ results }) => {
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
          <Text style={styles.dimension}>2140 ±4</Text>
          <Text style={styles.actualresult}>{results.actualresult_1}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>2</Text>
          <Text style={styles.characteristics}>Overall Width Of Skid</Text>
          <Text style={styles.dimension}>1085 ±4</Text>
          <Text style={styles.actualresult}>{results.actualresult_2}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>3</Text>
          <Text style={styles.characteristics}>Main Frame Height</Text>
          <Text style={styles.dimension}>1585 ±4</Text>
          <Text style={styles.actualresult}>{results.actualresult_3}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>4</Text>
          <Text style={styles.characteristics}>Width of Frame</Text>
          <Text style={styles.dimension}>850 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_4}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>5</Text>
          <Text style={styles.characteristics}>Length of Frame</Text>
          <Text style={styles.dimension}>1228 ±4</Text>
          <Text style={styles.actualresult}>{results.actualresult_5}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>6</Text>
          <Text style={styles.characteristics} wrap>
            Height of Raw Outlet Pipe From Base
          </Text>
          <Text style={styles.dimension}>1099 ±4</Text>
          <Text style={styles.actualresult}>{results.actualresult_6}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>7</Text>
          <Text style={styles.characteristics}>
            Height From Base To Horizontal Angle(50x6)
          </Text>
          <Text style={styles.dimension}>715 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_7}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>8</Text>
          <Text style={styles.characteristics}>
            Height From Base To Side Support Angle(50x50x5)
          </Text>
          <Text style={styles.dimension}>918 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_8}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>9</Text>
          <Text style={styles.characteristics}>
            Distance From Base To Upper Angle(50x6)
          </Text>
          <Text style={styles.dimension}>1028.5 ±4</Text>
          <Text style={styles.actualresult}>{results.actualresult_9}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>10</Text>
          <Text style={styles.characteristics}>
            Centre Distance of Pressure Tank From Frame
          </Text>
          <Text style={styles.dimension}>375 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_10}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>11</Text>
          <Text style={styles.characteristics}>
            Centre Distance of Pressure Tank From Base
          </Text>
          <Text style={styles.dimension}>1850 ± 4</Text>
          <Text style={styles.actualresult}>{results.actualresult_11}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>12</Text>
          <Text style={styles.characteristics}>
            Centre Cap Elevation From Pressure Tank End
          </Text>
          <Text style={styles.dimension}>157 ±2</Text>
          <Text style={styles.actualresult}>{results.actualresult_12}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>13</Text>
          <Text style={styles.characteristics}>Tapping Holes On Drum</Text>
          <Text style={styles.dimension}>1/4 Inch NPT 10 Places</Text>
          <Text style={styles.actualresult}>{results.actualresult_13}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>14</Text>
          <Text style={styles.characteristics}>
            Centre To Centre Distance Between Adjacent Cap
          </Text>
          <Text style={styles.dimension}>300 ±3 / 400 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_14}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>15</Text>
          <Text style={styles.characteristics}>
            No of Eye Bolts/CRS Distance
          </Text>
          <Text style={styles.dimension}>4/1178 ± 4 X 750 ± 3</Text>
          <Text style={styles.actualresult}>{results.actualresult_15}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.serialnumber}>16</Text>
          <Text style={styles.characteristics}>
            First Foundation Slot Elevation & CRS Distance
          </Text>
          <Text style={styles.dimension}>225 ±3 / 200 ±2</Text>
          <Text style={styles.actualresult}>{results.actualresult_16}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>17</Text>
          <Text style={styles.characteristics}>Number Of Slots/Size</Text>
          <Text style={styles.dimension}>6 Nos./ Dia. 14X34</Text>
          <Text style={styles.actualresult}>{results.actualresult_17}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>18</Text>
          <Text style={styles.characteristics}>
            LTA & HTA Coolers Frame Plate Elevation From Front of Skid Frame
          </Text>
          <Text style={styles.dimension}>330 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_18}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View break></View>
        <CharactoristicsHeader />
        <View style={styles.row}>
          <Text style={styles.serialnumber}>19</Text>
          <Text style={styles.characteristics}>
            Distance From Front Base Channel To Frame Plates
          </Text>
          <Text style={styles.dimension}>330 ±3(105+225)</Text>
          <Text style={styles.actualresult}>{results.actualresult_19}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <ChecklistSubTitle subtitle="HTA COOLER (Model No. GC-026X26)" />
        <View style={styles.row}>
          <Text style={styles.serialnumber}>20</Text>
          <Text style={styles.characteristics}>Pack Length (HTA)</Text>
          <Text style={styles.dimension}>117 ±3%</Text>
          <Text style={styles.actualresult}>{results.actualresult_20}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <ChecklistSubTitle subtitle="LTA COOLER (Model No. GC-026X52)" />
        <View style={styles.row}>
          <Text style={styles.serialnumber}>21</Text>
          <Text style={styles.characteristics}>
            Nozzle Center To Center Length
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
          <Text style={styles.dimension}>OD 100/ 190.5</Text>
          <Text style={styles.actualresult}>{results.actualresult_23}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>24</Text>
          <Text style={styles.characteristics}>
            Height From Base To M2 Centre (Cold Water Outlet).
          </Text>
          <Text style={styles.dimension}>320 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_24}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
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
        {/* Subtitle */}
        <ChecklistSubTitle subtitle="LTA COOLER (Model No. GX-004X39)" />

        <View style={styles.row}>
          <Text style={styles.serialnumber}>26</Text>
          <Text style={styles.characteristics}>Pack Length (LTA)</Text>
          <Text style={styles.dimension}>133 ±3%</Text>
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
            Height From Base To Centre Of Pipe Raw Water Inlet(LTA)
          </Text>
          <Text style={styles.dimension}>623 ±3(320+303)</Text>
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
            Distance From Front End To Center Of Make Pipe (38 OD) Of Tank
          </Text>
          <Text style={styles.dimension}>270 ±3</Text>
          <Text style={styles.actualresult}>{results.actualresult_32}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>33</Text>
          <Text style={styles.characteristics}>
            Slot Elevation from panel Side at Horizontal angle
          </Text>
          <Text style={styles.dimension}>290 ±3 / 75 ±2</Text>
          <Text style={styles.actualresult}>{results.actualresult_33}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>34</Text>
          <Text style={styles.characteristics}>
            Slot Size at Horizontal angle
          </Text>
          <Text style={styles.dimension}>10 ±2 x 20 ±2</Text>
          <Text style={styles.actualresult}>{results.actualresult_34}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>35</Text>
          <Text style={styles.characteristics}>
            Distance of Hole on Support Column
          </Text>
          <Text style={styles.dimension}>730 ±3 / 60 ±2</Text>
          <Text style={styles.actualresult}>{results.actualresult_35}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.serialnumber}>36</Text>
          <Text style={styles.characteristics}>
            Size & Qty of Holes Hole on Support Column
          </Text>
          <Text style={styles.dimension}>14 / 2</Text>
          <Text style={styles.actualresult}>{results.actualresult_36}</Text>
          <Text style={styles.classification}>M2</Text>
          <Text style={styles.equipmenttobeused}>Measuring Tape</Text>
          <Text style={styles.remarks}>Accepted</Text>
        </View>
      </View>
    </View>
  );
};

export default Chracteristics1500;
