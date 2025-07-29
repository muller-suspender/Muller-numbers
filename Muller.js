html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Muller Tech - Foreign Numbers</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background-image: url('https://files.catbox.moe/xiet1d.jpg');
      background-size: cover;
      background-position: center;
      color: white;
    }
    header {
      background: red;
      color: white;
      padding: 20px;
      text-align: center;
      text-shadow: 0 0 10px purple;
      animation: blinkShadow 2s infinite;
    }
    @keyframes blinkShadow {
      0%, 100% { text-shadow: 0 0 10px purple; }
      50% { text-shadow: 0 0 20px purple; }
    }
    .main-content {
      text-align: center;
      padding: 20px;
    }
    .glow {
      animation: glow 1.5s infinite alternate;
    }
    @keyframes glow {
      0% { text-shadow: 0 0 5px blue; }
      100% { text-shadow: 0 0 15px blue; }
    }
    .red-glow {
      animation: redGlow 1.5s infinite alternate;
    }
    @keyframes redGlow {
      0% { text-shadow: 0 0 5px red; }
      100% { text-shadow: 0 0 15px red; }
    }
    button {
      background: red;
      color: white;
      border: none;
      padding: 15px 30px;
      margin: 10px;
font-size: 16px;
      cursor: pointer;
      box-shadow: 0 0 10px pink;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 10px pink; }
      50% { box-shadow: 0 0 20px pink; }
      100% { box-shadow: 0 0 10px pink; }
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <header>
    <h1>Get Foreign Number Here 👇</h1>
  </header>

  <div class="main-content">
    <p class="glow">Enjoy WhatsApp foreign numbers by Mullertech❤️‍🔥</p>

    <div>
      <button onclick="toggleMenu()">☰ Main Menu</button>
      <div id="menu" style="display:none; margin-top: 15px;">
        <button onclick="window.location.href='https://whatsapp.com/channel/0029VbA6BUbCHDymv2WCqu2g'">📢 Our Channel</button>
        <button onclick="window.location.href='FILENAME.html'">📥 Get Number</button>
        <button onclick="window.location.href='https://wa.me/254762670615?text=Hellow 👋 Muller Tech am interested in learning how to use your tool to get foreign number 😌 please.'">📱 Owner Number</button>
      </div>
    </div>

    <h2 class="red-glow" style="color: green;">Get Foreign Numbers</h2>
<p class="glow">Enjoy WhatsApp Foreign Numbers with unlimited use but make wise use of it since it's created for helping purposes only by powerful Technologist</p>

    <h3 class="red-glow" style="color: green;">Muller Tech ⚙️</h3>

    <div class="footer">
      <p class="glow">Join our above channel for more tutorials and more lighted sites for help</p>
      <p>©copyright 2025 created by Muller Tech ⚙️</p>
    </div>
  </div>

  <script>
    function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.style.display = menu.style.display === "none" ? "block" : "none";
    }
  </script>

</body>
</html>
