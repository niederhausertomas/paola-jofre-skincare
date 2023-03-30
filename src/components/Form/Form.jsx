import React from 'react';
import './Form.css'
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    const enviarDatos = (e) => {
        e.preventDefault();
        const obj ={
            comprador: {
            nombre: name,
            apellido: lastName,
            telefono: phone,
            mail: mail
            }, 
            fecha:'',
            cart:[],
            total: 0
        }
    };

    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleMail = (e) => setMail(e.target.value);

    return (
        <form action='' onSubmit={enviarDatos} className='formulario d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <div className='d-flex justify-content-center flex-wrap'>
                    <img className='logoForm' src="./logo.jpg" alt="logo" />
                </div>
                <div className='formularioInputs'>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <input
                            type='text'
                            placeholder='Nombre'
                            name="nombre"
                            onChange={handleName}
                            value={name}
                        />
                        <input
                            type='text'
                            placeholder='Apellido'
                            name="apellido"
                            onChange={handleLastName}
                            value={lastName}
                        />
                    </div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <input
                            type='phone'
                            placeholder='Telefono'
                            name="telefono"
                            onChange={handlePhone}
                            value={phone}
                        />
                        <input
                            type='mail'
                            placeholder='E-mail'
                            name="e-mail"
                            onChange={handleMail}
                            value={mail}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btnCard'>Enviar</button>
                    </div>
                </div>
            </div>
        </form>
)}

export default Form