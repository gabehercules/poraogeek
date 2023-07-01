import Image from "next/image";
import posts from "./data";
import Link from "next/link";

// limita a quantidade de posts que aparecem na tela - temporário
const limit = 9;

const postsSlice = posts.slice(0, limit);

export default function PostList() {
  return (
    <>
      <div>
        <div>
          <h1>Últimas notícias</h1>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-10">
        {postsSlice.map((post, index) => (
          <li
            key={index}
            className="flex flex-col group bg-[#111] rounded-[10px] hover:bg-[#141414] transition-colors duration-500 overflow-hidden"
          >
            <Link href={post.link.url} className="flex flex-col">
              <div className="flex">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={300}
                  height={150}
                  className="w-full group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h2>{post.title}</h2>
                <div className="flex items-center gap-3 border-zinc-800">
                  <div className="flex items-center justify-center w-8 h-8 bg-zinc-500 rounded-full text-sm hover:scale-125 ease-out transition-all duration-300">
                    GH
                  </div>
                  <div>
                    <div className="text-sm">Nome fonte</div>
                    <div className="text-sm">
                      Nome autor - <span>11/05/2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// criar um componente de post card posteriormente