import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

interface props {
  material: {
    materialmoc_1: String;
    materialheatno_1: String;
    materialmtcno_1: String;
    materialmoc_2: String;
    materialheatno_2: String;
    materialmtcno_2: String;
    materialmoc_3: String;
    materialheatno_3: String;
    materialmtcno_3: String;
    materialmoc_4: String;
    materialheatno_4: String;
    materialmtcno_4: String;
    materialmoc_5: String;
    materialheatno_5: String;
    materialmtcno_5: String;
    materialmoc_6: String;
    materialheatno_6: String;
    materialmtcno_6: String;
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
    // borderBottomColor: '#bff0fd',

    borderBottomWidth: 1,
    // border: 1
  },
  srno: {
    width: "8%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    textAlign: "center",
    height: 13,
  },
  desciption: {
    width: "45%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    // fontFamily: "Lato Bold",
    textAlign: "center",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    // height: 13,
    minHeight: 13,
    fontFamily: "Helvetica-Bold",
  },
  dimentionReqd: {
    width: "30%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    textAlign: "center",
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    height: 13,
  },
  dimentionObserved: {
    width: "30%",
    borderRightWidth: 1,
    fontSize: "10px",
    padding: "1 5 1 5",
    height: 13,
    textAlign: "center",
  },
});
const DimentionDetails: React.FC<props> = ({ material }) => {
  return (
    <View style={{ paddingTop: "10px" }}>
      <View
        style={{
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Helvetica-Bold",
          fontWeight: "extrabold",
        }}
      >
        <Text>Dimensions Details</Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={styles.srno}>Sr. No.</Text>
          <Text style={styles.desciption}>Description</Text>
          <Text style={styles.dimentionReqd}>Dimension Reqd.</Text>
          <Text style={styles.dimentionObserved}>Dimension Observed (mm)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>1</Text>
          <Text style={styles.desciption}>Frame Plate</Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_1}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_1}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>2</Text>
          <Text style={styles.desciption}>Pressure Plate</Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_2}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_2}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>3</Text>
          <Text style={styles.desciption}>No. Of Heat Transfer Plate </Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_3}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_3}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>4</Text>
          <Text style={styles.desciption}>
            Length of Plate Pack 'A' Max / 'A' Min.
          </Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_4}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_4}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>5</Text>
          <Text style={styles.desciption}>Inlet/Outlet Connection Details</Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_5}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_5}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>6</Text>
          <Text style={styles.desciption}>P.C.D.X I.D.X no. Of Stud</Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_6}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_6}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>7</Text>
          <Text style={styles.desciption}>
            Distance of Nozzle Dimensions (Horizontal ./Vertical.)
          </Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_6}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_6}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>8</Text>
          <Text style={styles.desciption}>Tightening bolts Size</Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_6}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_6}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>9</Text>
          <Text style={styles.desciption}>No. Of. Bolts </Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_6}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_6}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>10</Text>
          <Text style={styles.desciption}>Foundation details</Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_6}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_6}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>11</Text>
          <Text style={styles.desciption}>
            Total Length/Height/Width of PHE
          </Text>
          <Text style={styles.dimentionReqd}>{material.materialmoc_6}</Text>
          <Text style={styles.dimentionObserved}>
            {material.materialheatno_6}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DimentionDetails;
