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
    width: "30%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    textAlign: "center",
    height: 13,
  },
  moc: {
    width: "18%",
    // borderRightColor: borderColor,
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    textAlign: "center",
    padding: "1 5 1 5",
    fontFamily: "Lato Bold",
    height: 13,
  },
  heatNo: {
    width: "15%",
    borderRightWidth: 1,
    fontSize: "10px",
    padding: "1 5 1 5",
    height: 13,
    textAlign: "center",
  },
  mtcNo: {
    width: "35%",
    borderRightWidth: 1,
    fontSize: "10px",
    padding: "1 5 1 5",
    height: 13,
    textAlign: "center",
  },
});
const MaterialDetails: React.FC<props> = ({ material }) => {
  return (
    <View style={{ paddingTop: "10px" }}>
      <View
        style={{
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Lato Bold",
          fontWeight: "extrabold",
        }}
      >
        <Text>Material Details</Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.row}>
          <Text style={styles.srno}>Sr. No.</Text>
          <Text style={styles.desciption}>MATERIAL DISCRIPTION</Text>
          <Text style={styles.moc}>MOC</Text>
          <Text style={styles.heatNo}>HEAT NO</Text>
          <Text style={styles.mtcNo}>MTC NO</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>1</Text>
          <Text style={styles.desciption}>Frame Plate</Text>
          <Text style={styles.moc}>{material.materialmoc_1}</Text>
          <Text style={styles.heatNo}>{material.materialheatno_1}</Text>
          <Text style={styles.mtcNo}>{material.materialmtcno_1}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>2</Text>
          <Text style={styles.desciption}>Pressure Plate</Text>
          <Text style={styles.moc}>{material.materialmoc_2}</Text>
          <Text style={styles.heatNo}>{material.materialheatno_2}</Text>
          <Text style={styles.mtcNo}>{material.materialmtcno_2}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>3</Text>
          <Text style={styles.desciption}>Heat Transfer Plate</Text>
          <Text style={styles.moc}>{material.materialmoc_3}</Text>
          <Text style={styles.heatNo}>{material.materialheatno_3}</Text>
          <Text style={styles.mtcNo}>{material.materialmtcno_3}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>4</Text>
          <Text style={styles.desciption}>Tightening Bolt + Nut</Text>
          <Text style={styles.moc}>{material.materialmoc_4}</Text>
          <Text style={styles.heatNo}>{material.materialheatno_4}</Text>
          <Text style={styles.mtcNo}>{material.materialmtcno_4}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>5</Text>
          <Text style={styles.desciption}>Nozzle Pipe</Text>
          <Text style={styles.moc}>{material.materialmoc_5}</Text>
          <Text style={styles.heatNo}>{material.materialheatno_5}</Text>
          <Text style={styles.mtcNo}>{material.materialmtcno_5}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.srno}>6</Text>
          <Text style={styles.desciption}>Nozzle Flanges</Text>
          <Text style={styles.moc}>{material.materialmoc_6}</Text>
          <Text style={styles.heatNo}>{material.materialheatno_6}</Text>
          <Text style={styles.mtcNo}>{material.materialmtcno_6}</Text>
        </View>
      </View>
    </View>
  );
};

export default MaterialDetails;
