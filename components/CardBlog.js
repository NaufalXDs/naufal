import InfoBlog from "./InfoBlog";
import Image from "next/image"; //341 164
import Link from "next/link";

export default function CardBlog({ link, thumbnail, ...infoBlog }) {
  return (
    <>
      <Link href={link}>
        <figure>
          <Image src={thumbnail} width="341" height="164" alt="" className="w-full cursor-pointer" />
        </figure>
      </Link>
      <article className="p-4 card-body text-center">
        {/* <div className="text-[#3a3232] text-sm">{date}</div> */}
        <InfoBlog {...infoBlog} />
      </article>
    </>
  );
}
