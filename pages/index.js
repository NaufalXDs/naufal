import { useState } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import InfoPost from "../components/InfoPost";
import mockPosts from "../utils/Post.json";
import CardPost from "../components/CardPost";

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Hero />
      {/* About */}
      <div id="About" className="pt-36 pb-20">
        <div className="container">
          <div className="card lg:card-side bg-base-100 shadow-xl text-center">
            <div className="card-body">
              <h2 className="font-bold text-3xl">About</h2>
              <p className="font-semibold text-gray-400">
                Hello my name is <span className="text-blue-500 font-semibold">Naufal</span> I am a <span className="text-slate-500 text-center">web developer</span> I was born In 2007, I started learning about programmers at year 2019
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Post Project */}
      <section id="Project" className="pb-32">
        <div className="container mx-auto px-9 items-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Project</h2>
              <p className="text-md font-medium text-gray-400 md:text-lg">Information My Work</p>
            </div>
          </div>

          <div className="flex">
            {/* <div className="w-full px-4 lg:w-1/2 xl:w-1/3"> */}
              <div className="flex flex-wrap mt-6 gap-5 -mx-5 md:mx-auto">
                {posts.map((post) => (
                  <div key={post.id} className="card mx-auto w-72 bg-gray-300 shadow-xl mt-4 rounded-none">
                    <CardPost {...post} />
                  </div>
                ))}
              </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
