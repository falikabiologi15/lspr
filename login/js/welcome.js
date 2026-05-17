document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    
    if (!username) {
        const userObj = localStorage.getItem("user");
        if (userObj) {
            try {
                const parsed = JSON.parse(userObj);
                username = parsed.username || parsed.name;
            } catch (e) {
                username = userObj;
                        }
                    }
          }

    if (username) {
        const userInfoEl = document.getElementById("userInfo");
        if (userInfoEl) {
            userInfoEl.innerText = "Halo, " + username;
        }


        const authAreaEl = document.getElementById("authArea");
        if (authAreaEl) {
            authAreaEl.innerHTML = `
                <button onclick="logout()" class="nav-cta">LOGOUT</button>
                    `;
                        }
                        }
            });

        function goLogin() {
            window.location.href = "login/index.html";
            }

        function logout() {
            localStorage.removeItem("username");
            localStorage.removeItem("user");
            localStorage.removeItem("token");
    
    location.reload();
}

window.goLogin = goLogin;
window.logout = logout;
