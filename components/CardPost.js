import InfoPost from "./InfoPost";
import Image from "next/image"; //341 164

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className="bg-[#15213d] dark:bg-[#778687] p-4 rounded shadow-md text-center">
      <Image src={thumbnail} width="341" height="164" alt="" className="min-w-full rounded"/>
      <InfoPost {...infoPost} />
    </article>
  );
}
