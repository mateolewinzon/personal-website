import Link from "next/link";
import { useRouter } from "next/router";
import formatDate from "../../utils/date";

export default function PostItem({ item }) {
  const { locale } = useRouter();

  return (
    <div className="flex flex-col w-max pb-6">
      <Link href={`/blog/${item.slug}`}>
        <a className="">
          <div className="pb-2">
            <div className="text-black font-semibold text-2xl">
              {item.title}
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="text-gray ">{formatDate(locale, item.date)}</div>
            </div>
            <div className="px-2">
              {item.tags.map((item) => (
                <div
                  key={item}
                  className="inline text-white rounded-xl m-2  bg-red p-1.5"
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
