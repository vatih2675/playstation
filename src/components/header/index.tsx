import Menu from "./menu";
import Time from "./time";

export default function Header() {
  return (
    <section className="px-10 bg-black text-white flex justify-between items-center gap-2 sticky top-0">
        <h1 className="text-xl">Vatih Game Center</h1>
        <Menu />
        <Time />
    </section>
  );
}
