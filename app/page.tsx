import LogoutButton from "@/components/LogoutBtn";

export default function Home() {
  return (
    <section className="flex w-full min-h-screen flex-col items-center justify-center p-24 bg-slate-700">
      <LogoutButton />
      <h1>Hello, This is main page</h1>
    </section>
  );
}
