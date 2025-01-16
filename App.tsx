import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { vacationDestination } from './app/vacation';
import { vacationPricing } from './app/vacation';

export default function App() {


type Person = { name: string, age: number, isStudent?: boolean };


interface Person2 {name:string , occupation:string, isStudent?:boolean, vacationDestination?: string, vacationPricing?: string}; 

const name = 'John Doe';
let occupation: string = 'Software Engineer';
const isStudent: boolean = true;
const age: number = 18;

//const occupation?: string = 'Software Engineer'; // optional

const data: Person = {
  name: 'John Doe', 
  age: 18, 
  isStudent: true
};

const data2: Person = {
  name : occupation, 
  age, 
  isStudent : false 
};

const data3: Person2 = { 
  name: 'John Doe', 
  occupation: 'Student' ,
  isStudent: true ,
  vacationDestination: vacationDestination('Paris'),
  vacationPricing: vacationPricing(1000)
};


const datalist = [data, data2, data3];

console.log(datalist[0].isStudent);

  return (
    
    <View style={styles.container}>
      <View>
      <Text>Welcome {name} lets go to {data3.vacationDestination}</Text> 
      <Text>The pricing is {data3.vacationPricing}</Text> 
      </View>
      <StatusBar style="auto" />
      <View>

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

  clickableText:{fontSize: 20, color: 'blue', textDecorationLine: 'underline', gap:10}
});
