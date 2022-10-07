import InfoPost from "./InfoPost";
import Image from "next/image";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className="bg-[#15213d] dark:bg-[#778687] p-4 rounded shadow-md text-center">
      <Image src={thumbnail} alt="" className="min-w-full rounded"/>
      <InfoPost {...infoPost} />
    </article>
  );
}
