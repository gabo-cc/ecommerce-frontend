"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginAction } from "@/actions/auth";
import { initialAuthState } from "@/lib/auth";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialAuthState,
  );

  return (
    <main className="flex min-h-[85vh] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">
          Bienvenido de nuevo
        </h1>

        <p className="mt-2 text-gray-500">
          Inicia sesión para continuar comprando.
        </p>

        <form action={formAction} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="correo@ejemplo.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Ingresa tu contraseña"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
            />
          </div>

          {state.error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/registro"
            className="font-semibold text-gray-900 underline"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </main>
  );
}
