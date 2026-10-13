"use client";

import { useState } from "react";
import type { Producto } from "@/lib/types";
import { useCarrito } from "@/store/cart-store";

interface Props {
  producto: Producto;
}

export default function AgregarCarrito({ producto }: Props) {
  const agregarProducto = useCarrito((state) => state.agregarProducto);

  const [agregado, setAgregado] = useState(false);

  const sinStock = producto.stock <= 0;

  function handleAgregar() {
    if (sinStock) return;

    agregarProducto(producto);
    setAgregado(true);
  }

  return (
    <button
      type="button"
      onClick={handleAgregar}
      disabled={sinStock}
      className="w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      {sinStock
        ? "Agotado"
        : agregado
          ? "✓ Agregar otro"
          : "Agregar al carrito"}
    </button>
  );
}
