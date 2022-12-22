import { useI18n } from "next-localization";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import { SpanSecondary } from "./SpanSecondary";

export const ViewCount = ({ slug }: { slug: string }) => {
  const i18n = useI18n();

  const { data: views } = useSWR(`/api/views/${slug}`, fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <SpanSecondary className="text-sm self-center">
      {views ? views : "-"} {i18n.t("blogs.view_count")}
    </SpanSecondary>
  );
};
