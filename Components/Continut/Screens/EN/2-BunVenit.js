import { ScrollView, Text, View } from "react-native";
import look from "../../../BaseStyle/Style";
import { Continut } from "../../../Continut/ContinutEn.json";
import BLSButton from "../../../Componente/blsButton";
const data = JSON.parse(JSON.stringify(Continut));

const BunVenit = (props) => {
  console.log('2_nav_loaded')
  return (
    <ScrollView style={look.background}>
      <View style={look.baseContainer}>
        {data.BunVenit.map((obj, index) => {
          if (
            obj ==
            "Noi NU suntem susținători și nu participăm la nici un fel de jertfă de sânge sau de viață. Această manifestare este iudeo/creștină, precum se afirmă în biblie, în "
          ) {
            return (
              <Text style={look.baseText}>
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
        <Text
          style={{
            color: "red",
            fontSize: 19,
            marginHorizontal: 15,
            paddingTop: 20,
            fontStyle: 'italic'
          }}
        >
          – Înalta Preoteasă Maxine Dietrich
        </Text>
      </View>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default BunVenit;
