import { Text } from 'react-native'
import { Link, router } from 'expo-router'
import ListScreen from '../components/listScreen'
import StyledButton from '../components/StyledButton'



export default function Home(){

    const handleLogin = () => {
        router.push('/')
      }

    return (
        <>
        <ListScreen/>
        <StyledButton 
      title='Volttar a tela de login'
      onPress={handleLogin}
      color='red'
      />
        </>
    )
}