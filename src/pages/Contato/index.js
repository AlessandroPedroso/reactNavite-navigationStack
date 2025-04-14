import { View, Text, Button } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
export default function Contato() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.dispatch(StackActions.popToTop()); //zera o inicio da pilha
  }
  return (
    <View>
      <Text>Pagina Contato</Text>
      <Button title="VOLTAR HOME" onPress={handleHome} />
    </View>
  );
}
