import Menu from "./menu";
import Time from "./time";
import Image from "next/image";
import Link from "next/link";
import PsPutih from "../../../public/ps-putih.png";

export default function Header() {
  return (
    <section className="px-10 bg-black text-white flex justify-between items-center gap-2 sticky top-0">
      <Link
        href="/"
        className="flex justify-center itmes-center gap-2 cursor-pointer"
      >
        <Image src={PsPutih} alt="alt" width={25} />
        <h1 className="text-xl font-black">
          V<span className="text-sm me-1">atih</span>G
          <span className="text-sm me-1">ame</span>C
          <span className="text-sm">enter</span>
        </h1>
      </Link>
      <Menu />
      <Time />
    </section>
  );
}
