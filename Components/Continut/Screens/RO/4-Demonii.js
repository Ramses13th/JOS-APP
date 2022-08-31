import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const Demonii = (props) => {
  console.log("4_nav_loaded");
  return (
    <ScrollView style={look.background}>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/adevarul-despre-demoni/"
          );
        }}
      >
        Adevărul despre Demoni
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/daemon/");
        }}
      >
        Daemon
      </Text>
      {/* Titlu */}
      <Text
        style={{
          textAlign: "left",
          color: "red",
          fontFamily: "serif",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        PANTEONUL IADULUI
      </Text>
      {/* Link Listat */}
      <Text
        style={{
          paddingTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "red",
            paddingTop: 10,
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {"\u25CF  "}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#4BB4FF",
            textDecorationLine: "underline",
            paddingTop: 10,
            letterSpacing: 1,
            marginLeft: 20,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => {
            Linking.openURL(
              "https://bucurialuisatan.com/zei-cu-rang-inalt-si-printi-incoronati-ai-iadului/"
            );
          }}
        >
          Zei/Demoni cu Rang Înalt și Prinți Încoronați ai Iadului
        </Text>
      </Text>
      {/* Link Listat */}
      <Text
        style={{
          paddingTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "red",
            paddingTop: 10,
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {"\u25CF  "}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#4BB4FF",
            textDecorationLine: "underline",
            paddingTop: 10,
            letterSpacing: 1,
            marginLeft: 20,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/zei-a-b/");
          }}
        >
          Zei/Demoni A – B
        </Text>
      </Text>
      {/* Link Listat */}
      <Text
        style={{
          paddingTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "red",
            paddingTop: 10,
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {"\u25CF  "}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#4BB4FF",
            textDecorationLine: "underline",
            paddingTop: 10,
            letterSpacing: 1,
            marginLeft: 20,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/zei-c-f/");
          }}
        >
          Zei/Demoni C – F
        </Text>
      </Text>
      {/* Link Listat */}
      <Text
        style={{
          paddingTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "red",
            paddingTop: 10,
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {"\u25CF  "}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#4BB4FF",
            textDecorationLine: "underline",
            paddingTop: 10,
            letterSpacing: 1,
            marginLeft: 20,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/zei-g-m/");
          }}
        >
          Zei/Demoni G - M
        </Text>
      </Text>
      {/* Link Listat */}
      <Text
        style={{
          paddingTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "red",
            paddingTop: 10,
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {"\u25CF  "}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#4BB4FF",
            textDecorationLine: "underline",
            paddingTop: 10,
            letterSpacing: 1,
            marginLeft: 20,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/zei-n-r/");
          }}
        >
          Zei/Demoni N - R
        </Text>
      </Text>
      {/* Link Listat */}
      <Text
        style={{
          paddingTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "red",
            paddingTop: 10,
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {"\u25CF  "}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#4BB4FF",
            textDecorationLine: "underline",
            paddingTop: 10,
            letterSpacing: 1,
            marginLeft: 20,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/zei-s-z/");
          }}
        >
          Zei/Demoni S - Z
        </Text>
      </Text>
      {/* Link Listat */}
      <Text
        style={{
          paddingTop: 10,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            color: "red",
            paddingTop: 10,
            letterSpacing: 1,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {"\u25CF  "}
        </Text>
        <Text
          style={{
            textAlign: "left",
            color: "#4BB4FF",
            textDecorationLine: "underline",
            paddingTop: 10,
            letterSpacing: 1,
            marginLeft: 20,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/alti-zei-demoni/");
          }}
        >
          Alți Zei/Demoni
        </Text>
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/ritualul-de-evocare/");
        }}
      >
        Cum să evoci Demoni
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/demoni-de-ordin-inferior/"
          );
        }}
      >
        Demonii de ordin inferior
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/demonii-si-bioelectricitatea/"
          );
        }}
      >
        Demonii și bioelectricitatea
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/evocarea-si-invocarea-magica/"
          );
        }}
      >
        Evocarea și invocarea magică
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/incubi-succubi/");
        }}
      >
        Incubi/Succubi
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/intrebari-frecvent-puse-demoni/"
          );
        }}
      >
        Întrebări frecvent puse despre Demoni
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/joaca-de-a-satanismul/");
        }}
      >
        Joaca de-a satanismul
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginRight: 10,
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/ajutor-din-partea-demonilor/"
          );
        }}
      >
        Lista Demonilor pentru ajutor în diverse probleme/nevoi
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginRight: 10,
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/ordinile-si-ierarhiile-demonilor/"
          );
        }}
      >
        Ordinile și ierarhiile Demonilor
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginRight: 10,
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/pendulul/");
        }}
      >
        Utilizarea pendulului
      </Text>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginRight: 10,
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/placa-ouija/");
        }}
      >
        Utilizarea plăcii ouija
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Demonii;
