import { NextResponse } from "next/server";
import {pool} from "../api/bd";

export async function POST(request){
    const res = await request.json()
    console.log(res.nombre)
    const rows = await pool.query('INSERT INTO pedido (nom_cliente,direccion,escuela,edificio,sala,descripcion) VALUES(?,?,?,?,?,?);', [String(res.nombre), String(res.direccion), String(res.escuela), String(res.edificio), String(res.sala), String(res.descripcion)])
    return NextResponse.json(res)
  }