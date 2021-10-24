import React from "react";

export default function repocard(data: any) {
  return (
    <div className="bg-pink-50 dark:bg-gray-900 p-3 my-2">
      <h1 className="font-semibold text-xl dark:text-gray-300 text-black-100">
        {data.repo.name}
      </h1>
      <p className="text-base font-normal my-4 dark:text-gray-400 text-gray-700">
        {data.repo.description}
      </p>
      <a href={data.repo.clone_url} className="flex flex-row umami--click--GitHub-project-link">
        <p>
          View Repository{" "}
          <span className="transform group-hover:translate-x-2 transition duration-300">
            &rarr;
          </span>
        </p>
      </a>
    </div>
  );
}
