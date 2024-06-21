import Image from "next/image";
import { blogInterface } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "blog"] | order(_createdAt desc){
    title,
    subTitle,
    body, 
    "image": titleImage.asset._ref,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data: blogInterface[] = await getData();
  console.log(data);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ');
    }
    return text;
  };

  return (
    <div className="p-[10%]">
    <div className="mt-10 md:mt-0">
      <h1 className="text-5xl font-semibold text-start md:text-center">Stories About Delivery Planning, Efficiency, and Business Success      </h1>
      <p className="text-start md:text-center py-5">Get top insights, news, and researched information on route planning, optimizing, and dispatching software. Get your daily dose!</p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr lg:md:grid-cols-3">
      
      {data.map((item, index) => (
        <div key={index} className="p-2">
          <div className="bg-white p-4 rounded-lg shadow-md h-full cursor-pointer modal-hover-animation">
            <Link  href={`/blog/${item.currentSlug}`}>
            <Image src={urlFor(item.titleImage).url()} alt={item.image} height={300} width={400} className="w-full" />
            <h1 className="text-xl font-bold mt-4">{item.title}</h1>
            <p className="text-lg text-gray-600 mt-2">{item.subTitle}</p>           
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
