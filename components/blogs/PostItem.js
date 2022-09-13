import Link from "next/link";
import { useRouter } from "next/router";
import formatDate from "../../utils/date";

export default function PostItem({ item }) {
  const { locale } = useRouter();

  return (
    <div className="flex flex-col outline outline-1 outline-gray-light p-4 m-4 md:w-3/4 rem py-5">
      <Link href={`/blog/${item.slug}`}>
        <a className="">
          <div className="pb-3">
            <div className="text-gray-dark hover:text-black font-semibold text-3xl">
              {item.title}
            </div>
          </div>
          <div className="pb-4">
            {item.description}
          </div>
          <div className="flex flex-row">
            <div>
              <div className="text-gray font-light">{formatDate(locale, item.date)}</div>
            </div>
            <div className="px-2">
              {item.tags.map((item) => (
                <div
                  key={item}
                  className="inline text-black rounded-xl m-2  bg-gray-100 p-1.5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
