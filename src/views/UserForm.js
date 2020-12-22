import React, {useContext, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);

  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setUser({...user, name})}
        placeholder="Type your name"
        value={user.name}
      />

      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => setUser({...user, email})}
        placeholder="Type your email"
        value={user.email}
      />

      <Text>URL do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={(avatarUrl) => setUser({...user, avatarUrl})}
        placeholder="Type avatar url"
        value={user.avatarUrl}
      />

      <Button
        title="Salvar"
        onPress={() => {
          const type = user.id ? 'updateUser' : 'createUser';
          dispatch({
            type: type,
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
});
