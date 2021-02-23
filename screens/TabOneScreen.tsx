import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { connect, RootStateOrAny } from "react-redux";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

import { Text, View } from "../components/Themed";
import { loginUser } from "../redux-store/actions/users";
const TabOneScreen = function () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const body = {
      email,
      password,
    };

    loginUser(body);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text>Welcome to Parade</Text>
        <Text>the social app that doesn't track you</Text>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputs_container}>
          <Input
            style={styles.input}
            containerStyle={styles.column}
            placeHolderText={"enter your email"}
            isSecure={false}
            callback={setEmail}
            value={email}
            hasLabel={true}
            label={"Email"}
          />
          <Input
            style={styles.input}
            containerStyle={styles.column}
            placeHolderText={"enter your password"}
            isSecure={true}
            callback={setEmail}
            value={password}
            label={"Password"}
            hasLabel={true}
          />
          <PrimaryButton
            title={"Login"}
            callback={loginUser}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: "90%",
  },
  inputs_container: {
    display: "flex",
  },
  input: {},
  column: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {},
});

const mapStateToProps = (state: RootStateOrAny) => ({
  users: state.users,
});

export default connect(mapStateToProps, { loginUser })(TabOneScreen);
