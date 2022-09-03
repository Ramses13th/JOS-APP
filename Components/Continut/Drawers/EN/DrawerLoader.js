import React from "react";

import BucuriaLuiSatan from "../../Screens/EN/1-BucuriaLuiSatanScreen";
import BunVenit from "../../Screens/EN/2-BunVenit";
import Satan from "../../Screens/EN/3-Satan";
import Demonii from "../../Screens/EN/4-Demonii";
import SatanismulSpiritual from "../../Screens/EN/5-SatanismulSpiritual";
import DoctrineleLuiSatan from "../../Screens/EN/6-DoctrineleLuiSatan";
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
        name="Welcome"
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
        name="Demons"
        component={Demonii}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Spiritual Satanism"
        component={SatanismulSpiritual}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Sermons of Satan"
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
        name="The Origins of Satanism"
        component={OriginileSatanismului}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Death, the Afterlife and Hell"
        component={MoarteIadSiViataDeApoi}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="How to Dedicate Your Soul to Satan"
        component={RitualulDeInitiere}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 1,
            fontSize: 14,
          },
        }}
      />
      <Drawer.Screen
        name="Satanic Symbols"
        component={SimboluriSatanice}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Newbies"
        component={Incepatorii}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Kids and Teens"
        component={CopiiiSiAdolescentii}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: { fontFamily: "serif", letterSpacing: 2 },
        }}
      />
      <Drawer.Screen
        name="Hell's Army 666"
        component={ArmataIadului}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 2,
            fontSize: 16,
          }
        }}
      />
      <Drawer.Screen
        name="SATANIC RITES AND CELEBRATIONS"
        component={Ritualuri}
        options={{
          headerStyle: { backgroundColor: "#000A23" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "serif",
            letterSpacing: 1,
            fontSize: 14,
          },
        }}
      />
      <Drawer.Screen
        name="Satanic Meditation"
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
        name="Satanic Witchcraft"
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
        name="Advanced Satanism"
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
            "Satanism's Origins in the Far East",
        }}
      />
      <Drawer.Screen
        name="Ministry"
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
        name="Satanic Covens"
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
        name="Links"
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
