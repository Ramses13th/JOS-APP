import React from "react";

import BucuriaLuiSatan from "../../Screens/EN/1-BucuriaLuiSatanScreen";
import BunVenit from "../../Screens/EN/2-BunVenit";
import Satan from "../../Screens/EN/3-Satan";
import Demonii from "../../Screens/EN/4-Demonii";
import SatanismulSpiritual from "../../Screens/EN/5-SatanismulSpiritual";
import DoctrineleLuiSatan from "../../Screens/EN/6-DoctrineleLuiSatan";
import Predici from "../../Screens/EN/7-Predici";
import OriginileSatanismului from "../../Screens/EN/8-OriginileSatanismului";
import MoarteIadSiViataDeApoi from "../../Screens/EN/9-MoarteIadSiViataDeApoi";
import RitualulDeInitiere from "../../Screens/EN/10-RitualulDeInitiere";
import SimboluriSatanice from "../../Screens/EN/11-SimboluriSatanice";
import Incepatorii from "../../Screens/EN/12-Incepatorii";
import CopiiiSiAdolescentii from "../../Screens/EN/13-CopiiiSiAdolescentii";
import ArmataIadului from "../../Screens/EN/14-ArmataIadului";
import Ritualuri from "../../Screens/EN/15-Ritualuri";
import Meditatii from "../../Screens/EN/16-Meditatii";
import Vrajitorie from "../../Screens/EN/17-Vrajitorie";
import SatanismAvansat from "../../Screens/EN/18-SatanismAvansat";
import Ministerul from "../../Screens/EN/19-Ministerul";
import CovanurileSatanice from "../../Screens/EN/20-CovanurileSatanice";
import Links from "../../Screens/EN/21-Link-uri";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerLoader() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Joy of Satan"
        component={BucuriaLuiSatan}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Bun Venit"
        component={BunVenit}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Satan"
        component={Satan}
        options={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontWeight: "bold",
            fontSize: 23,
          },
        }}
      />
      <Drawer.Screen
        name="Demonii"
        component={Demonii}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Satanismul Spiritual"
        component={SatanismulSpiritual}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Doctrinele lui Satan"
        component={DoctrineleLuiSatan}
        options={{
          headerStyle: { backgroundColor: "#3BA1FF" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 25,
            color: "#2B51E9",
          },
        }}
      />
      <Drawer.Screen
        name="Predici"
        component={Predici}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Originile Satanismului"
        component={OriginileSatanismului}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Moarte, Iad și viața de apoi"
        component={MoarteIadSiViataDeApoi}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Ritualul de inițiere"
        component={RitualulDeInitiere}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Simboluri Satanice"
        component={SimboluriSatanice}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Începătorii"
        component={Incepatorii}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Copiii și adolescenții"
        component={CopiiiSiAdolescentii}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Armata Iadului"
        component={ArmataIadului}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 16,
          },
          title: "Alătură-te Armatei Iadului 666",
        }}
      />
      <Drawer.Screen
        name="Ritualuri și ceremonii"
        component={Ritualuri}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 20,
          },
        }}
      />
      <Drawer.Screen
        name="Meditații"
        component={Meditatii}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 24,
          },
        }}
      />
      <Drawer.Screen
        name="Vrăjitorie"
        component={Vrajitorie}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 24,
          },
        }}
      />
      <Drawer.Screen
        name="Satanism Avansat"
        component={SatanismAvansat}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            fontSize: 15,
          },
          title:
            "Satanism avansat. Originile satanismului în Orientul Îndepărtat",
        }}
      />
      <Drawer.Screen
        name="Ministerul"
        component={Ministerul}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 24,
          },
        }}
      />
      <Drawer.Screen
        name="Covanurile Satanice"
        component={CovanurileSatanice}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 24,
          },
        }}
      />
      <Drawer.Screen
        name="Link-uri"
        component={Links}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 24,
          },
        }}
      />
    </Drawer.Navigator>
  );
}
