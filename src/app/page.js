"use client";
import  axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [esc, setEsc] = useState('');
  const [edif, setEdif] = useState('');
  const [sala, setSala] = useState('');
  const [prod, setProd] = useState('');

  const submitName = async () => {
    const response = await fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({nombre: name, direccion: addr, escuela: esc, edificio:edif, sala:sala, descripcion:prod})
    })
    const data = await response.json();
    console.log(data)
    alert("Pedido Realizado!")
  }

  
  // const agregar = () =>{
  //   setCont(cont+1);
  //   console.log("cont",cont,"prod_ing:",prod_ing,"\tcant:", cantidad)
  //   setProd(prod + [{id:cont,nombre:prod_ing,cantidad:cantidad});
  //   //productos.push({id:cont,nombre:prod_ing,cantidad:cantidad})
  //   console.log("prods:",JSON.stringify(prod))
  // }

  // const productosL = () => {
  //   var s = "";
  //   for(producto in productos){
  //       s += `<div><p>${producto.nombre}</p><p>${producto.cantidad}</p></div>`;
  //   }
  //   return s;
  // }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <p className='text-lg font-mono'>Bienvenido</p>
      </div>
      <div className='text-lg font-mono'>
        <p>Realiza tu pedido</p>
      </div>
      <br></br>
      <div className='-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p>Ingresa los siguientes datos por favor</p>
      </div>
      <br></br>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <label>Nombre: </label>
        <input className='text-black' type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Direccion: </label>
        <input className='text-black' type="text" value={addr} onChange={(e) => setAddr(e.target.value)}></input>
      </div>
      <br></br>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <label>Escuela: </label>
        <input className='text-black' type="text" value={esc} onChange={(e) => setEsc(e.target.value)}></input>
        <label>Edificio: </label>
        <input className='text-black' type="text" value={edif} onChange={(e) => setEdif(e.target.value)}></input>
        <label>Sala: </label>
        <input className='text-black' type="text" value={sala} onChange={(e) => setSala(e.target.value)}></input>
      </div>
      <br></br>
      <div className='text-lg font-mono'>
        <p>Ingresa los productos</p>
      </div>
      <br></br>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <label>Describe tu pedido:</label><textarea className='text-black' value={prod} onChange={(e)=>{setProd(e.target.value)}}></textarea>
      </div>
      <br></br>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
      {
          // productos.map((i)=>(
          //   <><li key={i.nombre}>Id: {i.nombre} Nombre: {i.cantidad}</li><br></br></>
          // // ))
          // JSON.stringify(productos)
      }
      </div>
      
      {/* <textarea className='text-black' value={productos} <div className='text-lg font-mono'>
        <p>Realiza tu pedido</p>
      </div>>{JSON.stringify(productos)}</textarea> */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <button onClick={submitName}>Enviar Pedido</button>
      </div>


    </main>
  )
}
