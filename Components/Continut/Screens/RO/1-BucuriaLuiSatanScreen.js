import { ScrollView, Text, View } from "react-native";

// content
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";
import { Continut } from "../../ContinutRo.json";
const data = JSON.parse(JSON.stringify(Continut))
//content

const BucuriaLuiSatan = (props) => {

  console.log('1_nav_loaded')

  return (
    <ScrollView style={look.background}>
      <View style={look.baseContainer}>
        {data.BucuriaLuiSatanOne.map((obj, index) => {
          if (
            obj ==
            "Noi NU suntem susținători și nu participăm la nici un fel de jertfă de sânge sau de viață. Această manifestare este iudeo/creștină, precum se afirmă în biblie, în "
          ) {
            return (
              <Text style={look.baseText} key={'text-nestuit'}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  {"Noi NU suntem susținători și nu participăm la nici un fel de jertfă de sânge sau de viață. Această manifestare este iudeo/creștină, precum se afirmă în biblie, în" +
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
                  Deuteronomul 12:27 – „Să-ți aduci arderile de tot, carnea și
                  sângele, pe altarul Domnului Dumnezeului tău: în celelalte
                  jertfe ale tale, sângele să fie vărsat pe altarul Domnului
                  Dumnezeului tău, iar carnea s-o mănânci.”
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
      <BLSButton navigate={props}/>
    </ScrollView>
  );
};

export default BucuriaLuiSatan;
