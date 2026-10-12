import Link from "next/link";
import { getProductos } from "@/lib/products";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function HomePage({ searchParams }: Props) {
  const { page } = await searchParams;
  const paginaSolicitada = Number(page);
  const pagina =
    Number.isSafeInteger(paginaSolicitada) && paginaSolicitada > 0
      ? paginaSolicitada
      : 1;

  const resultado = await getProductos(pagina);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Nuestra tienda</h1>
        <p className="mt-3 text-gray-600">
          Explora nuestros productos disponibles.
        </p>
      </header>

      {resultado.data.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resultado.data.map((producto) => (
            <article
              key={producto.id}
              className="rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{producto.name}</h2>

              <p className="mt-3 text-gray-600">{producto.description}</p>

              <p className="mt-4 text-lg font-bold">
                {producto.formatted_price}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Disponibles: {producto.stock}
              </p>

              <Link
                href={`/productos/${producto.id}`}
                className="mt-5 inline-block rounded-lg bg-black px-5 py-3 text-white"
              >
                Ver producto
              </Link>
            </article>
          ))}
        </section>
      )}

      <nav className="mt-10 flex justify-between">
        {pagina > 1 ? (
          <Link href={`/?page=${pagina - 1}`}>← Anterior</Link>
        ) : (
          <span />
        )}

        {pagina < resultado.meta.last_page && (
          <Link href={`/?page=${pagina + 1}`}>Siguiente →</Link>
        )}
      </nav>
    </main>
  );
}
