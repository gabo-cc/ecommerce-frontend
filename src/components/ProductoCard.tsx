import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/lib/types";

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <Link href={`/productos/${producto.id}`}>
        <div className="relative aspect-square bg-gray-50">
          {producto.image_url ? (
            <Image
              src={producto.image_url}
              alt={producto.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-6"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              Imagen no disponible
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900">{producto.name}</h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {producto.description}
        </p>

        <p className="mt-4 text-xl font-bold text-gray-900">
          {producto.formatted_price}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Disponibles: {producto.stock}
        </p>

        <Link
          href={`/productos/${producto.id}`}
          prefetch={false}
          className="mt-5 block rounded-lg bg-black px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}
