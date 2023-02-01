import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

import CharactoristicsHeader from "../../CharactoristicsHeader";
import ChecklistSubTitle from "../../ChecklistSubTitle";

const styles = StyleSheet.create({
  mainView: {
    marginTop: "5px",
    borderTop: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    textAlign: "center",
  },
  nozzelschedule: {
    flexDirection: "row",
    borderWidth: 1,
    width: "5%",
    alignItems: "center",
    fontSize: "9px",
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  nozzelno: {
    width: "25%",
    borderRightWidth: 1,
    // borderLeftWidth: 1,
    padding: 5,
    height: "100%",
  },
  size: {
    width: "15%",
    borderRightWidth: 1,
    // textAlign: "left",
    // paddingLeft: 5,
    // paddingRight: 5,
    padding: 5,
    height: "100%",
  },

  servicebase: {
    width: "30%",
    borderRightWidth: 1,
    padding: 5,
    height: "100%",
  },
  equipementToused: {
    width: "15%",
    borderRightWidth: 1,
    padding: 5,
    height: "100%",
  },
  remarks: {
    width: "15%",
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    padding: 5,
    height: "100%",
  },
  sidecontainer: {
    width: "95%",
  },
});
const Nozzel2000: React.FC = () => (
  <View style={{ paddingTop: "10px" }}>
    <View style={styles.container}>
      <View style={styles.nozzelschedule}>
        <Text>NOZZEL SCHEDULE</Text>
      </View>

      <View style={styles.sidecontainer}>
        <View
          style={[
            styles.row,
            { borderTopWidth: 1, fontFamily: "Helvetica-Bold" },
          ]}
        >
          <Text style={styles.nozzelno}>NOZZLE NO.</Text>
          <Text style={styles.size}>SIZE</Text>
          <Text style={styles.servicebase}>SERVICE BASE ON PHE</Text>
          <Text style={styles.equipementToused}>EQUIPMENT TO BE USED</Text>
          <Text style={styles.remarks}>REMARKS</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>LTA PHE</Text>
          <Text style={styles.size}>76.2 OD</Text>
          <Text style={styles.servicebase}>LTA Water Inlet </Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>76.2 OD</Text>
          <Text style={styles.servicebase}>LTA Water Outlet </Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>4.0" NB</Text>
          <Text style={styles.servicebase}>Raw Water Inlet </Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>4.0" NB </Text>
          <Text style={styles.servicebase}>Raw Water outlet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>HTA PHE</Text>
          <Text style={styles.size}>4.0" NB</Text>
          <Text style={styles.servicebase}>Raw Water Inlet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>4.0" NB</Text>
          <Text style={styles.servicebase}>Raw Water Outlet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>127 OD</Text>
          <Text style={styles.servicebase}>Engine Water Inlet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>127 OD</Text>
          <Text style={styles.servicebase}>Engine Water Outet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>FUEL PHE</Text>
          <Text style={styles.size}>1.0" NB</Text>
          <Text style={styles.servicebase}>Diesel Fuel Inlet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>1.0" NB</Text>
          <Text style={styles.servicebase}>Diesel Fuel Outlet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>1.0" NB</Text>
          <Text style={styles.servicebase}>Cooling Water Inleet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}></Text>
          <Text style={styles.size}>1.0" NB</Text>
          <Text style={styles.servicebase}>Cooling Water Outet</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
      </View>
    </View>
  </View>
);

export default Nozzel2000;
