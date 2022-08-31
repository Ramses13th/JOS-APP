import { ScrollView, Text, Linking, View } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const SatanismAvansat = (props) => {
  console.log("18_nav_loaded");
  return (
    <ScrollView style={look.background}>
      {/* nested link in text */}
      <Text style={look.baseText}>
        <Text style={look.baseText}>
          În urma anilor de cercetări în care am fost ghidați de iubitul nostru
          Tată Satan, am descoperit adevăratele origini ale satanismului.
        </Text>

        <Text
          style={look.linkTextLightBlue}
          onPress={() => {
            Linking.openURL("https://crestinismulexpus.blogspot.ro/");
          }}
        >
          {" "}
          Iudaismul și creștinismul sunt niște înșelăciuni de neegalat la adresa
          omenirii.
        </Text>
        <Text style={look.baseText}>
          {" "}
          Am ajuns la concluzia că afirmațiile conform cărora originile omenirii
          ar fi în Orientul Mijlociu, sunt doar niște minciuni menite să inducă
          oamenii în eroare și să creeze confuzie cu privire la adevăr.
          Cunoștința și învățăturile spirituale au ajuns în Egipt și Mesopotamia
          din Orientul Îndepărtat.{" "}
        </Text>
      </Text>

      <Text style={look.baseText}>
        De asemenea, dogmele iudaismului și creștinismului au fost furate din
        religiile din Orientul Îndepărtat, după care acestea au fost corupte și
        înlocuite cu mizeria jidanilor, cu scopul de a elimina toate
        cunoștințele spirituale din rândul populației. Calea lor e trasată prin
        minciuni și este marcată de omucideri, torturi și osândiri, împreună cu
        o degenerare spirituală severă a omenirii. Pentru ca aceste programe să
        își acopere temelia împuțită zidită pe cadavre și pentru a continua să
        existe, sunt necesare din ce în ce mai multe minciuni, corupție și o
        distrugere sistematică a artefactelor istorice.
      </Text>

      <Text style={look.baseText}>
        Atunci când te apuci să studiezi în mod detaliat disciplinele din
        Orientul Îndepărtat, este foarte important să păstrezi mereu în minte
        faptul că, din nefericire, acestea au fost intens poluate cu jegul și
        minciunile creștine, la fel ca aproape toate celelalte lucruri.
        ADEVĂRATUL scop al satanismului (în sanscrită– care e una dintre cele
        mai vechi limbi din lume – rădăcina „SAT” din toate cuvintele și
        variațiile numelui „Satan,” înseamnă „ADEVĂR”), este de a ne avansa
        sufletele și de a ne auto-împuternici spiritual. Gunoiul fără sens, cum
        e cazul „moralității” sau a „conduitei personale” ar trebui curățate la
        fel cum cureți mizeria de sub pat. Pentru că în adevăr, acestea nu au
        nimic de-a face cu dobândirea puterilor minții și ale sufletului.
        Cunoștința împreună cu o corectă aplicare a acesteia este singura cheie.
      </Text>

      <View
        style={{
          backgroundColor: "#0F0000",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 20,
            marginHorizontal: 10,
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderColor: "cyan",
            borderWidth: 1,
            textAlign: "center",
          }}
        >
          <Text style={{ fontStyle: "italic", color: "grey" }}>
            „Chiar la începutul secolului al XIII-lea, practicile Yantra-Tantra
            erau răspândite în întreaga Indie de Est. În același secol,
            invadatorii musulmani au distrus universitățile faimoase și centrele
            de predare Yantra-Tantra și au năruit mii de volume de literatură,
            manuscrise și pictograme. Oamenii care practicau arta Yantra-Tantra
            au fost masacrați și cei care au reușit să își salveze viața au
            fugit în India de Sud, Assam și țări ca Nepal, Tibet, Burma, Ceylon
            și Java. În timpuri mai recente, invadatorii chinezi care au jefuit
            Tibetul, au continuat distrugerea mânăstirilor și literaturii
            Yantra-Tantra.” {"\n\n"}– Preluat din: Power of Mantra and Yantra de
            P.Khurrana
          </Text>
        </Text>
      </View>

      <Text style={look.baseText}>
        Așa cum putem vedea cu ușurință din extrasul de mai sus, creștinismul și
        islamismul nu sunt nimic altceva decât unelte formidabile de distrugere
        a întregii spiritualități adevărate și înlocuirea acesteia cu minciuni
        și corupție. Multe lucruri au fost distruse. Satan ne îndrumă spre
        adevăr prin intermediul studiului personal și prin deschiderea minților
        și sufletelor noastre.
      </Text>

      <Text style={look.baseText}>
        <Text style={{ color: "indigo" }}>IMPORTANT!</Text>
        <Text>
          {" "}
          CEA MAI MARE PARTE DIN ÎNVĂȚĂTURILE ȘI DOCTRINELE RELIGIILOR ANTICE AU
          FOST CORUPTE. IGNORĂ-LE! UNELE EXERCIȚII, CUM SUNT CELE DIN{" "}
        </Text>
        <Text
          style={look.linkTextLightBlue}
          onPress={() => {
            Linking.openURL(
              "https://bucurialuisatan.com/wp-content/uploads/2015/05/Hatha-Yoga.pdf"
            );
          }}
        >
          YOGA FIZICĂ
        </Text>
        <Text> ȘI </Text>
        <Text
          style={look.linkTextLightBlue}
          onPress={() => {
            Linking.openURL(
              "https://bucurialuisatan.com/forum/doc/2/1490907001_yoga_kundalinic.pdf"
            );
          }}
        >
          YOGA KUNDALINICĂ
        </Text>
        <Text>, </Text>
        <Text
          style={look.linkTextLightBlue}
          onPress={() => {
            Linking.openURL(
              "https://bucurialuisatan.com/respiratii-yogice-bazice/"
            );
          }}
        >
          EXERCIȚIILE DE RESPIRAȚIE
        </Text>
        <Text>
          , ARTELE MARȚIALE, ETC., – SUNT O CU TOTUL ALTĂ POVESTE ȘI SUNT FOARTE
          EFECTIVE ÎN RIDICAREA AȘANUMITEI „PUTERI VRĂJITOREȘTI,” „VRIL,” „CHI,”
          „FORȚE VITALE.” ACEASTA ESTE ESENȚA SATANISMULUI.{" "}
        </Text>
      </Text>

      {/* nested link in text */}

      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/radacinile-si-originile-satanismului-adevarat/"
          );
        }}
      >
        Rădăcinile și originile satanismului adevărat
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/mesaj-de-la-satan-cu-privire-la-yoga/"
          );
        }}
      >
        MESAJ DE LA SATAN CU PRIVIRE LA YOGA
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/calea-lui-astaroth-din-8-pasi-pentru-avansarea-spirituala/"
          );
        }}
      >
        Calea lui Astarte din 8 pași, pentru avansarea spirituală
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/cuvinte-spirituale-de-cod/"
          );
        }}
      >
        Cuvinte spirituale de cod
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/expunerea-minciunilor-despre-yoga/"
          );
        }}
      >
        21. 11. 2010 – INFORMAȚII IMPORTANTE DESPRE YOGA KUNDALINICĂ și
        expunerea minciunilor din doctrinele populare cu Yoga
      </Text>

      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default SatanismAvansat;
