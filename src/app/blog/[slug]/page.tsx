import { blogDescriptionInterface } from "@/app/lib/interface"
import { client, urlFor } from "@/app/lib/sanity"
import { PortableText } from "next-sanity"
import Image from "next/image"

async function getData(slug: string){
    const query = `*[_type == "blog" && slug.current == '${slug}']{
  "currentSlug": slug.current,
    subTitle,
    title,
    titleImage,
    "createdAt":_createdAt,
    content,
    body,
    authorName,
    authorImage
    
}[0]`

const data = await client.fetch(query)
return data
}


const BlogArticle = async({params}: {params: {slug: string}}) => {

    const data: blogDescriptionInterface = await getData(params.slug)
    console.log(data)

    const originalTimestamp = data?.createdAt;
const date = new Date(originalTimestamp);

// Extract date components
const day = date.getUTCDate();
const month = date.getUTCMonth() + 1; // Months are zero-based
const year = date.getUTCFullYear();

// Create the formatted string
const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className="p-[5%] flex flex-col items-center justify-center text-center gap-6 w-[95%] md:w-3/4 lg:w-3/4 ml-auto mr-auto">
      <h1 className="font-bold">{data?.title}</h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
      <Image src={urlFor(data?.authorImage).url()} alt={data?.authorImage} height={90} width={90} quality={100} priority className="rounded-3xl"/>
      <h6 className="font-semibold"><span className="text-blue-900 font-semibold">By </span> {data?.authorName}</h6>
      </div>
      <p><span className="text-blue-900 font-semibold">Last Updated</span> {formattedDate}</p>
      </div>
      <Image src={urlFor(data?.titleImage).url()} alt={data?.image} height={1000} width={1000} quality={100} priority/>
      
      
        <p className="text-start">{data?.body}</p>
        <div className="mt-5 prose prose-blue prose-xl">
          <PortableText value={data?.content}/>
        </div>
    </div>
  )
}

export default BlogArticle
