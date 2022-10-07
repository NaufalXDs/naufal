export default function InfoPost({ date, title, shortDescription, category, link }) {
  return (
    <>
      {/* <img src={thumbnails} alt="" className="w-full" /> */}
      <h2 className="text-2xl mt-4 text-center text-yellow-300">
        {title}
      </h2>
      <p className="text-[#363636] mt-3 w-20/12">{shortDescription}</p>
      <div className="flex items-center justify-center text-base mt-10 space-x-2">
        <div className="text-[#963636] font-semibold">{category}</div>
        <span>&bull;</span>
        <div className="text-[#963636]">{date}</div>
        <hr />
        <a className="bg-red-400 p-2 rounded dark:text-white" rel="noreferrer" href={link} target="_blank">Repository</a>
      </div>
    </>
  );
}
