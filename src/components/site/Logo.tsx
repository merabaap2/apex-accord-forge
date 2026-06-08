import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative h-12 w-auto flex items-center transition-all">
        <Image
          src={logoImg}
          alt="R&A Associates"
          height={38}
          className="h-[38px] w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}