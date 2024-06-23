import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

const UserComponent = () => {
    const user = localStorage.getItem("user");
    const decoded = user ? jwtDecode(user) : { id: null, token: "" };
    const userId = decoded?.id;
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [plan, setPlan] = useState("");
    const [registrationDate, setRegistrationDate] = useState("");

    useEffect(() => {
        if (user) {
            if (userId) {
                api
                    .get(`/users/${userId}`, {
                        headers: { Authorization: `Bearer ${user}` },
                    })
                    .then(response => response.data)
                    .then(data => {
                        setName(data.user.name);
                        setCpf(data.user.cpf);
                        setEmail(data.user.email);
                        setDateOfBirth(data.user.dateOfBirth);
                        setPhone(data.user.phone);
                        setPassword(data.user.password);
                        setRegistrationDate(data.user.registrationDate);
                    })
                    .catch(error => {
                        console.log("Error fetching user data:", error);
                    });
            }
        } else {
            navigate("/log-in-account");
        }
    }, [user, userId, navigate]);

    return (
        <div>
            <h1>Usuário</h1>
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>CPF:</strong> {cpf}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Data de Nascimento:</strong> {dateOfBirth}</p>
            <p><strong>Telefone:</strong> {phone}</p>
            <p><strong>Senha:</strong> {password}</p>
            <p><strong>Data de Registro:</strong> {registrationDate}</p>
        </div>
    );
};

export default UserComponent;
