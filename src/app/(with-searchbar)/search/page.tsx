type SearchParams = Promise<{ q: string }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q } = await searchParams;
  return <div>Search 페이지 {q}</div>;
}
