import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { insertSession } from '../db'
import login from '../../assets/img/login.png';
import Input from '../components/Input'

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [triggerLogIn, result] = useLogInMutation()
 
  const onSubmit = () => {
  triggerLogIn({ email, password })
    // triggerLogIn({ email:"example@example.com", password:"123456" })
    console.log(result)
  }
  const dispatch = useDispatch()

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data))
      insertSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      })
        .then(result => console.log("Éxito al guardar sesión: ", result))
        .catch(error => console.log("Error al guardar sesión: ", error.message))
    }
  }, [result])

  return (
    <View style={styles.container}>
      <Image source={login} style={styles.loginIcon} />

      <Input
        label="Email: "
        onChange={setEmail}
      />
      <Input
        label="Contraseña:"
        onChange={setPassword}
        isSecureEntry={true}
      />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>Ingresar</Text>
      </TouchableOpacity>
      <View style={styles.altContainer}>
        <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
          <Text style={styles.subtitleLink}>Crear una</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    height: '55%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: '#86B6F6',
    borderRadius: 8,
    margin: 15,

  },
  btnText: {
    padding: 10,
    color: "black",
    fontFamily: "PlayfairDisplay-Bold"
  },
  altContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  subtitle: {
    color: "#fff",
    fontFamily: "PlayfairDisplay-Bold",
    fontSize: 14,
    marginTop: 50,
  },
  subtitleLink: {
    fontFamily: "Karla-Light",
    color: "#fff",
    fontSize: 11,
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
    marginTop: 50,
  },
  loginIcon: {
    alignSelf: 'center',
    width: '80%',
    height: '40%',
    marginTop: 10
  }
})