import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Header500 from "./Header500";

import logo1 from "./tranter1.jpg";
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
const Nozzel500: React.FC = () => (
  <View style={{ paddingTop: "10px" }}>
    <View style={styles.container}>
      <View style={styles.nozzelschedule}>
        <Text>NOZZ EL SCHE DULE</Text>
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
          <Text style={styles.nozzelno}>S1</Text>
          <Text style={styles.size}>2.5"NB</Text>
          <Text style={styles.servicebase}>Raw Water Inlet LTA</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>S3</Text>
          <Text style={styles.size}>2.5"NB</Text>
          <Text style={styles.servicebase}>Raw Water Inlet HTA</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>S4</Text>
          <Text style={styles.size}>100 MM OD</Text>
          <Text style={styles.servicebase}>Raw Water Outlet HTA</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>M1</Text>
          <Text style={styles.size}>127.5 MM OD </Text>
          <Text style={styles.servicebase}>
            Hot Water Inlet To PHE From Engine
          </Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>M2</Text>
          <Text style={styles.size}>127.5 MM OD</Text>
          <Text style={styles.servicebase}>Cold Water Outlet From PHE</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>M3</Text>
          <Text style={styles.size}>38.1 MM OD</Text>
          <Text style={styles.servicebase}>
            Hot Water Inlet To PHE From Engine
          </Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.nozzelno}>M4</Text>
          <Text style={styles.size}>38.1 MM OD</Text>
          <Text style={styles.servicebase}>Cold Water Outlet From PHE</Text>
          <Text style={styles.equipementToused}>Vernier Caliper</Text>
          <Text style={styles.remarks}>Verified</Text>
        </View>
      </View>
    </View>
  </View>
);

export default Nozzel500;
