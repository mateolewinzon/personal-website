import Link from "next/link";
import { useRouter } from "next/router";
import formatDate from "../../utils/date";

export default function PostItemBox({ item }) {
  const { locale } = useRouter();

  return (
    <Link href={`/blog/${item.slug}`}>
      <a className="">
        <div className="flex flex-col m-2 text-center outline outline-1  outline-gray-light hover:outline-gray p-3 pb-6">
          <div className="pb-2">
            <div className="text-gray-dark hover:text-black font-semibold text-2xl">
              {item.title}
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="text-gray ">{formatDate(locale, item.date)}</div>
            </div>
            <div className="px-2">
              {item.tags.map((item) => (
                <div key={item} className="inline text-gray-dark hover:text-black  m-2 ">
                  #{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
