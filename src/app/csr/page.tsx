"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

function Page() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodoData = () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/todos");
          const data = await res.json();
          setTodo(data);
          console.log("Fetched Todos:", data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }, 1000);
    };
    fetchTodoData();
  }, []);

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
        <p>Fetched data from the server using CSR</p>
        {loading ? (
          <div>Loading...</div>
        ) : (
          todo.length > 0 && (
            <div className="text-white">
              {todo.slice(0, 10).map((item: Todo) => (
                <p key={item.id}>
                  {item.id}: {item.title}
                </p>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Page;
