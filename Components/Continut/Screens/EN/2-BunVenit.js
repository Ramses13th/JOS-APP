import { ScrollView, Text, View } from "react-native";
import look from "../../../BaseStyle/Style";
import { Continut } from "../../../Continut/ContinutEn.json";
import BLSButton from "../../../Componente/blsButtonEn";
const data = JSON.parse(JSON.stringify(Continut));

const BunVenit = (props) => {
  console.log("2_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <View style={look.baseContainer}>
        {data.BunVenit.map((obj) => {
          return (
            <Text style={look.baseText} key={obj + Math.random()}>
              {obj} {console.log(obj)}
            </Text>
          );
        })}
      </View>

      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default BunVenit;
