import PostCard from "../PostCard";
import { formatDate } from "../../utils/functions";

async function fetchRecentPosts() {
  let page = 1;
  const perPage = 8; // posso usar para controlar o tamanho da resposta

  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/posts?pagination[page]=${page}&pagination[pageSize]=${perPage}&populate=*`,
      {
        cache: "no-store",
      }
    );

    // console.log("LOG DO RES", res);
    // console.log("LOG DO STRAPI", process.env.STRAPI_API_URL);

    return res.json();
  } catch (error) {
    console.log("Error fetching posts", error);
    return <p>Erro ao buscar os posts</p>;
  }
}

export default async function PostList() {
  const { data } = await fetchRecentPosts();

  // async function handleLoadMore() {
  //   let page = 1;
  //   return await fetchRecentPosts(page++);
  // }

  const posts = data;

  // console.log("LOG DOS POSTS AQUI", posts);

  return (
    <div>
      <ul className="grid grid-cols-4 gap-10">
        {posts.map((post: any) => (
          <PostCard
            title={post.attributes.post_title}
            featuredImage={post.attributes.featured_media.data.attributes.url}
            id={post.id}
            key={post.id}
            slug={post.attributes.post_slug}
            date={formatDate(post.attributes.createdAt)}
          />
        ))}
      </ul>
    </div>
  );
}
