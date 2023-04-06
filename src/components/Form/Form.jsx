import React, { createContext, useContext } from 'react';
import './Form.css'
import { useState } from 'react';
import { CartContext } from '../../context/Cartcontext';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import { Link } from 'react-router-dom';


const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [mail2, setMail2] = useState('');
    const [orderId, setOrderId] = useState('');

    const {cart, totalCompra, deleteAll} = useContext(CartContext);

    const enviarDatos = (e) => {
        e.preventDefault();
        const objOrden ={
            comprador: {
            nombre: name,
            apellido: lastName,
            telefono: phone,
            mail: mail
            }, 
            fecha: serverTimestamp(),
            productos: cart,
            total: totalCompra()
        }

        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, objOrden )
        .then((res)=>{
            setOrderId(res.id)
            deleteAll();
        })
    };

    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleMail = (e) => setMail(e.target.value);
    const handleMail2 = (e) => setMail2(e.target.value);

    return (
        (orderId) ? 
        <div className="container text-center">
            <br/><br/><br/><br/>
            <h2 className='container '>Tu pedido fue realizado tu numero de seguimiento es: {orderId} </h2>
            <br/><br/>
            <Link to={'/'} className='btn btnCard'>Volver al Home</Link>
            <br/><br/><br/><br/>
        </div>:
        <form action='' onSubmit={enviarDatos} className='formulario d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <div className='d-flex justify-content-center flex-wrap'>
                    <img className='logoForm' src="./logo.jpg" alt="logo" />
                </div>
                <div className='formularioInputs'>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <input
                            type='text'
                            placeholder='* Nombre'
                            name="nombre"
                            onChange={handleName}
                            value={name}
                        />
                        <input
                            type='text'
                            placeholder='* Apellido'
                            name="apellido"
                            onChange={handleLastName}
                            value={lastName}
                        />
                    </div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <input
                            type='phone'
                            placeholder='* Telefono'
                            name="telefono"
                            onChange={handlePhone}
                            value={phone}
                        />
                        <input
                            type='mail'
                            placeholder='* e-mail'
                            name="e-mail"
                            onChange={handleMail}
                            value={mail}
                        />
                    </div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <input
                            type='mail'
                            placeholder='* Confirmar e-mail'
                            name="e-mail2"
                            onChange={handleMail2}
                            value={mail2}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button disabled={mail !== mail2 || name===""} className='btn btnCard'>Enviar</button>
                    </div>
                    <p className='d-flex justify-content-center'> * Datos necesarios para coordinar la entrega </p>
                </div>
            </div>
        </form>
)}

export default Form