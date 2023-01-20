import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainView: {
    marginTop: "10px",
    border: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomColor: '#bff0fd',

    borderBottomWidth: 1,
    // border: 1
  },
  warranty: {
    fontSize: "16px",
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
  },
});
const WarrentyCondition: React.FC = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.warranty}>
        <Text>Warranty/Guarantee</Text>
      </View>
      <View>
        <Text>
          The goods supplied by us meet our quality standards If however, any
          defects proven to be due to poor workmanship or material occur within
          12 months from the date of dispatch the same shall be rectified free
          of charge by repair or replacement at our works. Warranty does not
          cover normal wear & tear, corrosion, consumables, rubber components
          and routine maintenance.
        </Text>
        <Text>
          The warranty clause is applicable in case the equipment is used as per
          maintenance & operation instructions. The responsibility of selection
          of the material and suitability to the fluids, rest completely with
          the buyer. Bulging due to freezing, swelling of rubber, intermixing
          due to pitting corrosion and pin holes, cracks due to induced thermal
          stresses etc. after the operation shall not come under warranty.
        </Text>
      </View>
    </View>
  );
};

export default WarrentyCondition;
