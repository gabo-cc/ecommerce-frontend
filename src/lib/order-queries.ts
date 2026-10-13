import "server-only";

import { cookies } from "next/headers";
import type { Orden, OrdenResponse } from "@/lib/orders";

export async function getOrden(orderId: number): Promise<Orden | null> {
  if (!Number.isSafeInteger(orderId) || orderId <= 0) {
    return null;
  }

  const apiUrl = process.env.API_BASE_URL;

  if (!apiUrl) {
    throw new Error("API_BASE_URL no configurada");
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return null;
  }

  const response = await fetch(`${apiUrl}/orders/${orderId}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (
    response.status === 401 ||
    response.status === 403 ||
    response.status === 404
  ) {
    return null;
  }

  if (!response.ok) {
    throw new Error("No se pudo consultar la orden.");
  }

  const resultado = (await response.json()) as OrdenResponse;

  return resultado.data;
}
