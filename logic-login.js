document.getElementById("loginBtn").addEventListener("click", () => {
  const sound = document.getElementById("loginSound");
  sound.play();

  // Placeholder Pi login logic
  alert("Login with Pi (SDK integration coming soon)");

  // TODO: Replace with actual Pi SDK login:
  // PiNetworkAuth.login().then(user => { ... });
});
