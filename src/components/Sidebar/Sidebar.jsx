import { useState } from "react";
import { Link } from "react-router-dom";

const username = "rafiagasya";

const repos = [
  { name: "Django-Crud" },
  { name: "Android-App" },
  { name: "Study" },
  { name: "I-don-t-know" },
  { name: "Neural" },
  { name: "python" },
  { name: "New" },
];

export default function Sidebar() {
  const [showAll, setShowAll] = useState(false);
  const visibleRepos = showAll ? repos : repos.slice(0, 6);

  return (
    <aside className="w-[280px] flex-shrink-0">
      {/* Top Repositories header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-[#1f2328]">Top repositories</span>
        <Link
          to="/new"
          className="flex items-center gap-1.5 text-sm font-semibold bg-[#1f6feb] text-white px-3 py-1.5 rounded-md hover:bg-[#388bfd] transition-colors"
        >
          {/* Repo icon */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
          </svg>
          New
        </Link>
      </div>

      {/* Search box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Find a repository..."
          className="w-full text-sm border border-[#d0d7de] rounded-md px-3 py-2 outline-none focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da]/20 bg-white text-[#1f2328] placeholder-[#8b949e]"
        />
      </div>

      {/* Repo list */}
      <ul className="space-y-0">
        {visibleRepos.map((repo) => (
          <li key={repo.name}>
            <Link
              to={`/${username}/${repo.name}`}
              className="flex items-center gap-3 px-1 py-2 rounded-md hover:bg-[#f6f8fa] group transition-colors"
            >
              {/* Avatar foto user */}
              <img
                src={`https://avatars.githubusercontent.com/${username}?size=32`}
                alt={username}
                className="w-6 h-6 rounded-full flex-shrink-0"
                onError={(e) => { e.target.src = "https://github.githubassets.com/images/gravatars/gravatar-user-420.png"; }}
              />
              <span className="text-sm text-[#0969da] font-medium group-hover:underline truncate">
                {username}/<span className="font-semibold">{repo.name}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {repos.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-1 text-sm text-[#0969da] hover:underline px-1 py-1"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}

      {/* Divider */}
      <hr className="border-[#d0d7de] my-4" />

      {/* Recent Activity */}
      <div>
        <h3 className="text-sm font-semibold text-[#1f2328] mb-3">Recent activity</h3>
        <div className="text-xs text-[#8b949e] bg-[#f6f8fa] border border-[#d0d7de] rounded-md p-3">
          <p>When you take actions across GitHub, we'll provide links to that activity here.</p>
        </div>
      </div>
    </aside>
  );
}