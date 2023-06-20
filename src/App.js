import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import InputBar from './SearchBar/InputBar';
import ToDo from './ToDo/ToDo';

function App() {
  const [text, setText] = useState('');
  const [miktar, setMiktar] = useState(0);
  const [tasks, setTasks] = useState([]);
  const createButtonAlert = index =>
    Alert.alert(
      'Silinecek!',
      'Göreviniz siliniyor . . Umarım başarılı bir şekilde tamamlanmıştır.',
      [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Tamam', onPress: () => handleDeleteTask(index)},
      ],
    );

  const handleDeleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setMiktar(miktar - 1);
  };

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText('');
    setMiktar(miktar + 1);
  };
  return (
    <ImageBackground
      source={require('./assets/a.png')}
      style={styles.container2}>
      <View style={styles.container}>
        <View>
          <View style={styles.title_container}>
            <View style={styles.title_background}>
              <Text style={styles.title}>Yapılacaklar</Text>
              <Text style={styles.title2}>{miktar}</Text>
            </View>
          </View>

          <View>
            <FlatList
              data={tasks}
              renderItem={({item, index}) => (
                <ToDo item={item} onPressT={() => createButtonAlert(index)} />
              )}
              keyExtractor={item => item + Date.now() + Math.random()}
            />
          </View>
        </View>

        <View style={styles.down}>
          <InputBar value={text} onWrite={setText} />

          <TouchableOpacity
            style={styles.touchbale}
            onPress={handleAddTaskPress}>
            <Text style={styles.touchableOpacity_text}>Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title_container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    paddingLeft: 10,
    color: '#F29727',
    fontSize: 30,
    fontWeight: 'bold',
  },
  title2: {
    paddingRight: 10,
    color: '#F29727',
    fontSize: 30,
    fontWeight: 'bold',
  },
  touchbale: {
    backgroundColor: '#F29727',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 400,
    marginBottom: 10,
  },

  container2: {
    flex: 1,
    resizeMode: 'cover', // Resmi ekrana sığdırmak için kullanılabilir
  },

  title_background: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 30,
  },

  touchableOpacity_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  down: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
