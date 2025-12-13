import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full justify-between px-6 py-4">
      <Link href="/dashboard">Vital Track</Link>

      <div>User</div>
    </header>
  );
}



