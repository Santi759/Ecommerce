import React,{useEffect, useState} from "react";
import "./CarritoLleno.css"
import EmptyCart from "./CarritoVacio";// importamos el componente vacío

export default function CarritoLleno(){
    //Ejemplo de prdocutos cargados (podemos reemplazarlo por el estado con localStorage o contexto)

    const [productos, setProductos] = useState([]);
        
        useEffect(()=>{
            const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
            setProductos(carritoGuardado);
        },[]);

    //Calculamos el total
    const total = productos.reduce((acc,prod)=> acc + Number (prod.precio) * (prod.cantidad || 1),0);

    //Vaciar carrito
    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        setProductos([]);
    };

    return (
       <div className="carrito-container">
      <div className="productos">
        {productos.length > 0 ? (
          productos.map((prod) => (
            <div key={prod.id} className="producto">
              <img src={prod.imagen} alt={prod.nombre} />
              <h3>{prod.nombre}</h3>
              <p>Precio: ${Number(prod.precio).toLocaleString()}</p>
              <p>Categoría: {prod.categoria}</p>
              <p>Cantidad: {prod.cantidad || 1}</p>
            </div>
          ))
        ): (
          <EmptyCart/>
        )}
        </div>        
        {productos.length > 0 &&(
            <div className="resumen">
              <h3>Resumen de pedido</h3>
              <hr />
              <p>
                <strong>Total:</strong>${total.toLocaleString()}
              </p>
              <button className="btn-finalizar">Finalizar compra</button>
              <button className="btn-cancelar">Cancelar compra</button>
        </div>
        )}
        </div>
    );
}