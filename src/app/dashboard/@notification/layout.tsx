import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="notify">Notify</Link>
        <Link href="setting">Setting</Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
