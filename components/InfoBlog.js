export default function InfoBlog({ date, title, shortDescription, category, link }) {
  return (
    <>
      {/* <img src={thumbnails} alt="" className="w-full" /> */}
      <h2 className="card-title text-yellow-300">{title}</h2>
      <p className="text-[#363636]">{shortDescription}</p>
      <div className="flex items-center justify-center text-base mt-10 space-x-5">
        <div className="font-semibold text-gray-400">{category}</div>
        <span>&bull;</span>
        {/* <div className="text-[#963636]">{date}</div> */}
        <a className="card-actions bg-red-400 p-2 rounded dark:text-white" rel="noreferrer" href={link} target="_blank">
          Repository
        </a>
      </div>
    </>
  );
}
