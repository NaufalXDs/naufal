import InfoPost from "./InfoPost";
import Image from "next/image"; //341 164
import Link from "next/link";

export default function CardPost({ link, thumbnail, ...infoPost }) {
  return (
    <>
      <Link href={link}>
        <figure>
          <Image src={thumbnail} width="341" height="164" alt="" className="w-full cursor-pointer" />
        </figure>
      </Link>
      <article className="p-4 card-body text-center">
        {/* <Image src={thumbnail} width="341" height="164" alt="" className="px-10 pt-10 rounded"/> */}
        <InfoPost {...infoPost} />
      </article>
    </>
  );
}
