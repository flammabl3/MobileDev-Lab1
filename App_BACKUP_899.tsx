import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
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


=======
import { vacationDestination } from './app/vacation';
import { vacationPricing } from './app/vacation';

export default function App() {


type Person = { name: string, age: number, isStudent?: boolean };


interface Person2 {name:string , occupation:string, isStudent?:boolean, vacationDestination?: string, vacationPricing?: string}; 

const name = 'Neeraj Bachwani';
let occupation: string = 'Software Engineer';
const isStudent: boolean = true;
const age: number = 18;

//const occupation?: string = 'Software Engineer'; // optional

const data: Person = {
  name: 'Neeraj Bachwani', 
  age: 18, 
  isStudent: true
};

const data2: Person = {
  name : occupation, 
  age, 
  isStudent : false 
};

const data3: Person2 = { 
  name: 'Neeraj Bachwani', 
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
      <Text style = {styles.Text}>Welcome </Text> 
      <Text style = {styles.ParaText}>{name} lets go to {data3.vacationDestination}</Text> 
      <Text style = {styles.ParaText}>The pricing is {data3.vacationPricing}</Text> 
      </View>
      <StatusBar style="auto" /> 
      <View> 
       // create a button that will show up a alert message when clicked.
        <TouchableOpacity onPress={() => alert('Have Fun in Paris !')}>
          <Text style={styles.clickableText}>Click for surprise</Text>
        </TouchableOpacity>
      </View>
    </View>
    

    
  );
}

>>>>>>> origin/Neeraj-Workspace
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< HEAD
  Title:  {
    fontSize: 20,
    fontWeight: "bold"
  },
  Body Items:  {

  }
=======
  //style the button
  clickableText:{fontSize: 20, color: 'black', gap:10 , backgroundColor: 'lightblue', padding: 10, borderRadius: 10, marginTop:10},  

//style the text tag 
 Text:{fontSize: 20, color: 'black', gap:10 , backgroundColor: 'lightblue', padding: 10, borderRadius: 10,  textAlign: 'center', fontWeight: 'bold', marginBottom: 10},
 
//style the paragraphh
  ParaText:{fontSize: 15, color: 'black', gap:10 , borderRadius: 10,   textAlign: 'center', fontWeight: '500'}

>>>>>>> origin/Neeraj-Workspace
});
