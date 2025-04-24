import Layout from "@/app/layout";
import {SearchPage} from "@/pages/SearchPage/SearchPage";

export default function Home() {
  return (
      <div>
        <h1 className="text-2xl font-bold">📚 Welcome to Book Store</h1>
        <p>Use the search bar to find your next favorite book.</p>

          <SearchPage />
      </div>
  );
}
