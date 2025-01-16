import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clickableText:{fontSize: 20, color: 'black', gap:10 , backgroundColor: 'lightblue', padding: 10, borderRadius: 10, marginTop:10},  

//style the text tag 
 Text:{fontSize: 20, color: 'black', gap:10 , backgroundColor: 'lightblue', padding: 10, borderRadius: 10,  textAlign: 'center', fontWeight: 'bold', marginBottom: 10},

  ParaText:{fontSize: 15, color: 'black', gap:10 , borderRadius: 10,   textAlign: 'center', fontWeight: '500'}

});
