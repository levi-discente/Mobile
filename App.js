import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Card, Image, Input, Button } from "react-native-elements";

const Login = ({ onCadastro, onEsqueci }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ width: 300, height: 500 }}>
        <Card.Title style={{ fontSize: 30 }}>Login</Card.Title>

        <View style={styles.imageContainer}>
          <Image source={require("./assets/user.png")} style={styles.image} />
        </View>

        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Card.Divider />

        <View>
          <Button title="Login" buttonStyle={{ backgroundColor: "green", marginBottom: 10 }} />
          <Button title="Registrar" buttonStyle={{ backgroundColor: "gray", marginBottom: 10 }} onPress={onCadastro} />
        </View>

        <Card.FeaturedSubtitle
          style={{ textAlign: "center" }}
          onPress={onEsqueci}
        >
          Esqueceu a senha?
        </Card.FeaturedSubtitle>
      </Card>
    </SafeAreaView>
  );
};

const Cadastro = ({ onVoltar }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ width: 300, height: 600 }}>
        <Card.Title style={{ fontSize: 30 }}>Cadastro</Card.Title>

        <View style={styles.imageContainer}>
          <Image source={require("./assets/user.png")} style={styles.image} />
        </View>

        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Confirmar Password" secureTextEntry={true} />
        <Card.Divider />

        <Button title="Registrar" buttonStyle={{ backgroundColor: "green", marginBottom: 20 }} />
        <Card.FeaturedSubtitle
          style={{ textAlign: "center" }}
          onPress={onVoltar}
        >
          Já tem uma conta?
        </Card.FeaturedSubtitle>
      </Card>
    </SafeAreaView>
  );
};

const ForgotPassword = ({ onVoltar }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ width: 300, height: 400 }}>
        <Card.Title style={{ fontSize: 20, marginBottom: 20 }}>Esqueci minha senha</Card.Title>

        <View style={styles.imageContainer}>
          <Image source={require("./assets/user.png")} style={styles.image} />
        </View>

        <Input placeholder="Email" />
        <Card.Divider />
        <Button title="Enviar Email" buttonStyle={{ backgroundColor: "green", marginTop: 30 }} />

        <Card.FeaturedSubtitle
          style={{ textAlign: "center", marginTop: 20 }}
          onPress={onVoltar}
        >
          Voltar
        </Card.FeaturedSubtitle>
      </Card>
    </SafeAreaView>
  );
};

const Main = () => {
  const [telaAtual, setTelaAtual] = useState("login");

  if (telaAtual === "login") {
    return <Login onCadastro={() => setTelaAtual("cadastro")} onEsqueci={() => setTelaAtual("forgot")} />;
  } else if (telaAtual === "cadastro") {
    return <Cadastro onVoltar={() => setTelaAtual("login")} />;
  } else if (telaAtual === "forgot") {
    return <ForgotPassword onVoltar={() => setTelaAtual("login")} />;
  }
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100
  }
});

