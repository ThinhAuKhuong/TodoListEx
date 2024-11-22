import React from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.taskwrapper}>
          <Text style={styles.headingtitle}>Today's Tasks</Text> 
      </View> 
      {/* This is the space contains the tasks */}
      <View style={styles.tasksitems}>
       <Task text={'Task 1'}/>
       <Task text={'Task 2'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  headingtitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksitems: {
    marginTop: 15,

  },
});
