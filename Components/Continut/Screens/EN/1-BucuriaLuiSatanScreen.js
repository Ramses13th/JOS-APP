import { ScrollView, Text, View } from "react-native";

// content
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";
import { Continut } from "../../ContinutEn.json";
const data = JSON.parse(JSON.stringify(Continut));
//content

const BucuriaLuiSatan = (props) => {
  console.log("1_nav_loaded");

  return (
    <ScrollView style={look.background}>
      <View style={look.baseContainer}>
        {data.BucuriaLuiSatanOne.map((obj, index) => {
          if (
            obj ==
            "We DO NOT advocate or participate in any blood or living sacrifice. This act is Judeo/Christian, as stated in their Bible-"
          ) {
            return (
              <Text style={look.baseText} key={"text-nestuit"}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  {"We DO NOT advocate or participate in any blood or living sacrifice. This act is Judeo/Christian, as stated in their Bible-" +
                    " "}
                </Text>
                <Text
                  style={{
                    color: "yellow",
                    fontSize: 19,
                    marginHorizontal: 15,
                  }}
                  key={obj + Math.random()}
                >
                  Deuteronomy 12:27: "And thou shalt offer thy burnt offerings,
                  the flesh and the blood, upon the altar of the LORD thy God:
                  and the blood of thy sacrifices shall be poured out upon the
                  altar of the LORD thy God, and thou shalt eat the flesh."
                </Text>
              </Text>
            );
          } else {
            return (
              <Text style={look.baseText} key={obj + Math.random()}>
                {obj}
              </Text>
            );
          }
        })}
      </View>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default BucuriaLuiSatan;
