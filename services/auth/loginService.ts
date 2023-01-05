export function loginService(
  apiKey: any,
  enteredEmail: any,
  enteredPassword: any
) {
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToke: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
