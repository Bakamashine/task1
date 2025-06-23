import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup/index"
        options={{
          headerTitle: "Signup",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="login/index"
        options={{
          headerTitle: "Login",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
