"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCarrito } from "@/store/cart-store";

export default function ConfirmarCompra() {
  useEffect(() => {
    // Limpiar el carrito solo después de recuperar su estado.
    if (useCarrito.persist.hasHydrated()) {
      useCarrito.getState().vaciarCarrito();
      return;
    }

    const unsubscribe = useCarrito.persist.onFinishHydration(() => {
      useCarrito.getState().vaciarCarrito();
    });

    return unsubscribe;
  }, []);

  return (
    <div className="mt-8">
      <Link
        href="/"
        className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
