import FeaturedBanner from "../components/Cms/Banners/FeaturedBanner";
import Layout from "../components/Layout";
import PostListHome from "../components/Cms/PostListHome";
import ShardIcon from "../components/ShardIcon";
import Link from "next/link";

// adiconado uma gambiarra via copilot© para a tipagem de posts pq eu já num manjo de javascript quanto menos de typescript
export default function Dashboard() {
  return (
    <>
      <Layout>
        <div className="flex bg-darker-bg gap-5">
          <div className="flex flex-col flex-1 gap-6 p-10">
            <FeaturedBanner />
            <div>
              <PostListHome />
              <Link href="/noticias">Explore</Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
