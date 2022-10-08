import Layout from "../components/Layout";
import Head from "next/head";
import { useState } from "react";
import mockPosts from "../utils/Blog.json";
import CardBlog from "../components/CardBlog";

export default function Blog() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Naufal7 - Blog</title>
      </Head>
      <div className="container mx-auto px-10 py-10">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Blog</h2>
            <p className="text-md font-medium text-gray-400 md:text-lg">Tutorial or Other Information</p>
          </div>
        </div>

        <div className="flex">
            {/* <div className="w-full px-4 lg:w-1/2 xl:w-1/3"> */}
              <div className="flex -mx-4 flex-wrap mt-6 gap-10">
                {posts.map((post) => (
                  <div key={post.id} className="card mx-auto w-72 bg-gray-300 shadow-xl mt-4 rounded-none">
                    <CardBlog {...post} />
                  </div>
                ))}
              </div>
              {/* </div> */}
            {/* </div> */}
          </div>
      </div>
    </Layout>
  );
}
