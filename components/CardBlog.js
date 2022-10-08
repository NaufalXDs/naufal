import InfoBlog from "./InfoBlog";
import Image from "next/image"; //341 164

export default function CardBlog({ date, thumbnail, ...infoBlog }) {
  return (
    <article className="bg-[#15213d] dark:bg-[#778687] p-4 card-body items-center text-center rounded">
      <div className="text-[#3a3232] text-sm">{date}</div>
      <Image src={thumbnail} width="341" height="164" alt="" className="px-10 pt-10 rounded" />
      <InfoBlog {...infoBlog} />
    </article>
  );
}
