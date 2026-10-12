import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-xl font-bold text-gray-900">
          E-Commerce
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black">
            Productos
          </Link>

          <Link href="/cuenta" className="hover:text-black">
            Mi cuenta
          </Link>

          <Link
            href="/login"
            className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Ingresar
          </Link>
        </div>
      </nav>
    </header>
  );
}
