import Bookmark from "./(useClient)/Bookmark";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-3">
        <Bookmark />
        <Bookmark />
        <Bookmark />
        <Bookmark />
      </div>
    </main>
  );
}
