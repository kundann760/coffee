import Link from "next/link";

type Todo = {
  id: number;
  title: string;
};

// Fetching data server-side
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "force-cache", // Ensures fresh data on every request
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const todo = await getTodos();

  return (
    <div className="min-h-screen py-12 pt-36 bg-black">
      <h1 className="text-3xl text-white text-center">
        This is the Learning Section of{" "}
        <Link
          href="https://www.linkedin.com/in/kundan-mokhale-75b1b7210/"
          target="_blank"
          className="text-blue-600"
        >
          Mr. Kundan Mokhale
        </Link>{" "}
        who built this Coffee Shop.
      </h1>
      <div className="mt-20 mx-auto flex flex-col gap-5 justify-center items-center text-2xl text-white">
        <p>Fetched data from the server using SSR</p>
        <div className="text-white">
          {todo.slice(10, 20).map((item: Todo) => (
            <p key={item.id}>
              {item.id}: {item.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
