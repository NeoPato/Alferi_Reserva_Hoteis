import { useState } from "react";

function setLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (email && password && email === "admin" && password === "admin") {
        const user = {
            email: email,
            entryDate: new Date().toLocaleString(),
            id: Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "../src/pages/App.jsx";
    } else {
        document.getElementById("error-modal").style.display = "flex";
        document.getElementById("user").style.border = "2px solid red";
        document.getElementById("password").style.border = "2px solid red";
    }
}

export default setLogin;
