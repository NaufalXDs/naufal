export default function InfoPost({ date, title, shortDescription, category, link }) {
  return (
    <>
      {/* <img src={thumbnails} alt="" className="w-full" /> */}
      <h2 className="card-title text-[#4b4b4a] ml-4">{title}</h2>
      <p className="text-[#7d7c7c] text-start ml-2">{shortDescription}</p>
      <div className="card-actions justify-end mt-4 mr-2 flex flex-wrap">
        <div className="text-[#585b5f] badge badge-outline">{date}</div>
        <div className="font-semibold text-gray-900 text-right badge badge-outline">{category}</div>
      </div>
    </>
  );
}
