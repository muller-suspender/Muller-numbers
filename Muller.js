<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Foreign Number Here | Muller Tech</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: url('https://files.catbox.moe/xiet1d.jpg') no-repeat center center fixed;
            background-size: cover;
            color: white;
            min-height: 100vh;
            position: relative;
        }
        
        .overlay {
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }
        
        .main-header {
            background-color: red;
            color: white;
            padding: 20px;
            text-align: center;
            margin-bottom: 30px;
            border-radius: 10px;
            animation: purple-glow 2s infinite;
            box-shadow: 0 0 20px purple;
        }
        
        .sub-header {
            color: white;
            text-align: center;
            margin-bottom: 40px;
            animation: blue-glow 3s infinite;
            font-size: 1.2em;
        }
        
        .main-button {
            display: block;
            width: 300px;
            margin: 0 auto 40px;
            padding: 15px;
            background-color: red;
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1.2em;
            font-weight: bold;
            cursor: pointer;
            animation: pink-glow 1.5s infinite;
            text-align: center;
            text-decoration: none;
        }
        
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.9);
            min-width: 200px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            z-index: 2;
            border-radius: 10px;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .dropdown-content a {
            color: white;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            border-bottom: 1px solid #333;
        }
        
        .dropdown-content a:hover {
            background-color: #222;
        }
        
        .show {
            display: block;
        }
        
        .main-content {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
            animation: blue-glow 4s infinite;
        }
        
        .footer {
            text-align: center;
            padding: 20px;
            margin-top: 50px;
            color: white;
        }
        
        .copyright {
            margin-top: 20px;
            font-size: 0.9em;
            opacity: 0.8;
        }
        
        @keyframes pink-glow {
            0%, 100% { box-shadow: 0 0 10px 5px rgba(255, 105, 180, 0.7); }
            50% { box-shadow: 0 0 20px 10px rgba(255, 105, 180, 0.9); }
        }
        
        @keyframes purple-glow {
            0%, 100% { box-shadow: 0 0 10px 5px rgba(128, 0, 128, 0.7); }
            50% { box-shadow: 0 0 20px 10px rgba(128, 0, 128, 0.9); }
        }
        
        @keyframes blue-glow {
            0%, 100% { text-shadow: 0 0 5px rgba(0, 0, 255, 0.7); }
            50% { text-shadow: 0 0 15px rgba(0, 0, 255, 0.9); }
        }
        
        @keyframes green-red-glow {
            0%, 100% { color: lime; text-shadow: 0 0 5px red; }
            50% { color: green; text-shadow: 0 0 15px red; }
        }
        
        .sub-heading {
            animation: green-red-glow 2s infinite;
            font-size: 1.3em;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="overlay"></div>
    
    <div class="container">
        <div class="main-header">
            <h1>Get Foreign Number Here 👇</h1>
        </div>
        
        <div class="sub-header">
            Enjoy WhatsApp foreign numbers by Mullertech❤️‍🔥
        </div>
        
        <div style="position: relative; display: inline-block;">
            <a href="#" class="main-button" onclick="toggleMenu()">Get Foreign Numbers</a>
            <div id="dropdownMenu" class="dropdown-content">
                <a href="https://whatsapp.com/channel/0029VbA6BUbCHDymv2WCqu2g" target="_blank">Our Channel</a>
                <a href="#" id="getNumberLink">Get Number</a>
                <a href="#" id="ownerNumberLink">Owner Number</a>
            </div>
        </div>
        
        <div class="main-content">
            <div class="sub-heading">Enjoy WhatsApp Foreign Numbers</div>
            <p>with unlimited use but make wise use of it since it's created for helping purposes only by powerful Technologist</p>
            <div style="margin-top: 20px; font-weight: bold;">Muller Tech ⚙️</div>
        </div>
        
        <div class="footer">
            <p>Join our above channel for more tutorials and more lighted sites for help</p>
            <div class="copyright">©copyright 2025 created by Muller Tech ⚙️</div>
        </div>
    </div>

    <script>
        // Toggle dropdown menu
        function toggleMenu() {
            document.getElementById("dropdownMenu").classList.toggle("show");
        }
        
        // Close the dropdown if clicked outside
        window.onclick = function(event) {
            if (!event.target.matches('.main-button')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        
        // Set up the "Get Number" link
        document.getElementById("getNumberLink").addEventListener("click", function(e) {
            e.preventDefault();
            // Replace with your actual file name/path
            window.location.href = "YOUR_FILE_NAME_HERE.html";
        });
        
        // Set up the "Owner Number" link
        document.getElementById("ownerNumberLink").addEventListener("click", function(e) {
            e.preventDefault();
            const message = encodeURIComponent("Hellow 👋 Muller Tech am interested in learning how to use your tool to get foreign number 😌 please.");
            window.open(`https://wa.me/254762670615?text=${message}`, "_blank");
        });
    </script>
</body>
</html>
