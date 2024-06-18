import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function ServerComponent() {
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [tel, setTel] = useState('');
    const [senha, setSenha] = useState('');

    const handleCreateEvent = async () => {
        try {
            await prisma.event.create({
                data: {
                    name: name,
                    cpf: cpf,
                    email: email,
                    dateOfBirth: date,
                    phone: tel,
                    password: senha
                },
            });

            console.log('Novo evento criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar evento:', error);
        }
    };

    return { cpf, setCpf, email, setEmail, name, setName, date, setDate, tel, setTel, senha, setSenha, handleCreateEvent };
}

export default ServerComponent;
