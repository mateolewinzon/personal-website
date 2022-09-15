import Link from "next/link";
import { useRouter } from "next/router";
import formatDate from "../../utils/date";
import Span from "../common/Span";
import SpanSecondary from "../common/SpanSecondary";
import SubHeading from "../common/SubHeading";

export default function PostItem({ item }) {
  const { locale } = useRouter();

  return (
    <div className="flex flex-col outline outline-1 rounded-md outline-gray-light hover:outline-gray dark:outline-black-800 dark:hover:outline-gray-dark p-4 m-4 w-full md:w-3/4 rem py-5">
      <Link href={`/blog/${item.slug}`}>
        <a className="">
          <div className="pb-3">
            <SubHeading className="text-3xl">{item.title}</SubHeading>
          </div>
          <div className="pb-4">
          <Span className='text-lg'>{item.description}</Span></div>
          <div className="flex flex-row">
            <SpanSecondary className="font-light text-gray-dark">
              {formatDate(locale, item.date)}
            </SpanSecondary>
            <div className="px-2">
              {item.tags.map((item) => (
                <SpanSecondary
                  key={item}
                  className="inline text-black rounded-xl m-2 bg-gray-100 dark:text-gray dark:bg-black-800 p-1.5"
                >
                  {item}
                </SpanSecondary>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
