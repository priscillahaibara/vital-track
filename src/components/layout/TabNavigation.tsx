import Link from "next/link";

export default function TabNavigation() {
  return (
    <nav className="fixed bottom-0 w-full p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/patients">Patients List</Link>
        </li>
        <li>
          <Link href="/patients/new">Create Patient</Link>
        </li>
      </ul>
    </nav>
  );
}
