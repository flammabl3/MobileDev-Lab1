import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import VacationDestination, { VacationPricing } from './app/vacation';

export default function App() {
  type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    height: number;
  };

  interface OtherPerson {
    name: String;
    age: Number;
    vacDest: String;
    vacationPrice: Number;
  };
  
  const name: string = "James T. Kirk";
  let occupation: string = "Starship Captain";

  const isStudent: boolean = true;
  const age: number = 25;
  const height: number = 5.11;

  const data: Person = {
    name: "John Doe",
    age: 25,
    isStudent: true,
    height: 5.11
  }

  const kirk: OtherPerson = {name: name, age: age, vacDest: VacationDestination("Taiwan"), vacationPrice: VacationPricing(100)};
  const datalist = [data, kirk];

  console.log(datalist[0].name);

  return (
    <View>
      <View>
        <Text style={styles.Title}>TITLE!!!</Text>
      </View>
      <View>
        <Text style={{fontSize : 20}}>Vacation Destination: {kirk.vacDest}</Text>
        <Text style={{fontSize : 20}}>Vacation pricing: {kirk.vacationPrice}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {
          alert("Vacation Ready")}
        }>
          <Text>Click me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title:  {
    fontSize: 20,
    fontWeight: "bold"
  },
  Body Items:  {

  }
});
