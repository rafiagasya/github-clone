import Sidebar from "../../components/Sidebar/Sidebar";
import FeedItem from "../../components/FeedItem/FeedItem";

const feedData = [
  {
    user: "adrianhajdin",
    repo: "adrianhajdin/jsm_bookified",
    action: "contributed to",
    time: "2 days ago",
    title: "add clerk billing #5",
    badge: "Merged",
    reactions: 1,
    comments: 11,
    summary: [
      {
        title: "New Features",
        items: [
          "Subscription pricing page with tiered plans (Free, Standard, Pro) and enforced limits on books, monthly sessions, and session duration",
          "Session duration limits and session-history availability vary by plan",
        ],
      },
      {
        title: "UI/UX",
        items: [
          '"Pricing" added to the navigation',
          "Search box to filter books on the main page",
          "Improved status...",
        ],
      },
    ],
  },
  {
    user: "adrianhajdin",
    repo: "adrianhajdin/jsm_bookified",
    action: "contributed to",
    time: "3 days ago",
    title: "implement voice assistant functionalities with vapi #3",
    badge: "Merged",
    reactions: 4,
    comments: 14,
    summary: [
      {
        title: "New Features",
        items: [
          "Voice assistant integration using Vapi for real-time conversations",
          "PDF upload with validation, automatic cover extraction",
        ],
      },
    ],
  },
  {
    user: "adrianhajdin",
    repo: "adrianhajdin/jsm_bookified",
    action: "contributed to",
    time: "4 days ago",
    title: "implement database setup and much more #2",
    badge: "Merged",
    reactions: 4,
    comments: 14,
    summary: [
      {
        title: "New Features",
        items: [
          "PDF upload with validation, automatic cover extraction, and persona (voice) selection",
          "Client-side upload flow with progress, toasts, and authenticated uploads",
        ],
      },
    ],
  },
];

const trendingRepos = [
  {
    name: "RightNow-AI/openfang",
    desc: "Open-source Agent Operating System",
    lang: "Rust",
    color: "#dea584",
    stars: "6k",
  },
  {
    name: "ruvnet/wifi-densepose",
    desc: "Production-ready implementation of InvisPose - a revolutionary WiFi-based dense human pose estimation system that enables real-time full-body tracking through walls using commodity mesh routers",
    lang: "Rust",
    color: "#dea584",
    stars: "12.8k",
  },
];

const popularProjects = [
  {
    name: "libvips/libvips",
    desc: "A fast image processing library with low memory needs.",
    lang: "C",
    color: "#555555",
    stars: "11.1k",
  },
];

const changelog = [
  { date: "Yesterday", text: "Copilot usage metrics now includes enterprise-level GitHub Copilot CLI..." },
  { date: "Yesterday", text: "Copilot metrics is now generally available" },
  { date: "2 days ago", text: "GitHub Actions now supports uploading and downloading non-zipped artifacts" },
  { date: "2 days ago", text: "Copilot metrics report URLs update" },
];

const ChevronDown = () => (
  <svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
  </svg>
);

const StarButton = () => (
  <div className="flex items-center border border-[#d0d7de] rounded-md overflow-hidden flex-shrink-0">
    <button className="flex items-center gap-1.5 text-xs font-medium text-[#1f2328] px-2.5 py-1.5 hover:bg-[#f6f8fa] whitespace-nowrap">
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>
      Star
    </button>
    <button className="px-1.5 py-1.5 border-l border-[#d0d7de] hover:bg-[#f6f8fa]">
      <ChevronDown />
    </button>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-[62px]">
      <div className="max-w-[1280px] mx-auto px-4 py-6 flex gap-6">

        <Sidebar />

        <main className="flex-1 min-w-0">
          <h1 className="text-2xl font-semibold text-[#1f2328] mb-4">Home</h1>

          {/* Ask anything box */}
          <div className="border border-[#d0d7de] rounded-2xl mb-3 bg-white shadow-sm">
            <div className="px-5 pt-5 pb-3">
              <input
                type="text"
                placeholder="Ask anything"
                className="w-full text-base outline-none text-[#1f2328] placeholder-[#8b949e] bg-transparent"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 gap-2">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 text-sm text-[#57606a] border border-[#d0d7de] rounded-lg px-3 py-2 hover:bg-[#f6f8fa] font-medium">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.414L0 14.414V2zm4 3.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H4zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H4z"/></svg>
                  Ask <ChevronDown />
                </button>
                <button className="flex items-center gap-2 text-sm text-[#57606a] border border-[#d0d7de] rounded-lg px-3 py-2 hover:bg-[#f6f8fa] font-medium">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Z"/></svg>
                  All repositories <ChevronDown />
                </button>
                <button className="flex items-center justify-center w-9 h-9 text-[#57606a] border border-[#d0d7de] rounded-lg hover:bg-[#f6f8fa]">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-sm text-[#57606a] border border-[#d0d7de] rounded-lg px-3 py-2 hover:bg-[#f6f8fa] font-medium">
                  Claude Haiku 4.5 <ChevronDown />
                </button>
                <button className="text-[#57606a] hover:text-[#1f2328] p-1.5">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338L15.637 1.5z"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Action buttons outside box */}
          <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
            {[
              { label: "Task", icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"/></svg> },
              { label: "Create issue", icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg> },
              { label: "Write code", dropdown: true, icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"/></svg> },
              { label: "Git", dropdown: true, icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0-.001-1.458Z"/></svg> },
              { label: "Pull requests", dropdown: true, icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z"/></svg> },
            ].map((btn) => (
              <button key={btn.label} className="flex items-center gap-2 text-sm text-[#57606a] border border-[#d0d7de] rounded-lg px-4 py-2 hover:bg-[#f6f8fa] font-medium bg-white">
                {btn.icon}
                {btn.label}
                {btn.dropdown && <ChevronDown />}
              </button>
            ))}
          </div>

          {/* Feed header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-[#57606a]">Feed</h2>
            <button className="flex items-center gap-1.5 text-sm text-[#57606a] border border-[#d0d7de] rounded-md px-3 py-1.5 hover:bg-[#f6f8fa]">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Z"/></svg>
              Filter
            </button>
          </div>

          <div className="space-y-3">
            {/* Feed item 1 */}
            <FeedItem {...feedData[0]} />

            {/* Trending repositories */}
            <div className="border border-[#d0d7de] rounded-lg bg-white overflow-hidden">
              <div className="px-4 py-3 flex items-center gap-2 border-b border-[#d0d7de]">
                <svg width="16" height="16" fill="#57606a" viewBox="0 0 16 16"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Z"/></svg>
                <span className="text-sm font-semibold text-[#1f2328]">Trending repositories</span>
                <span className="text-sm text-[#57606a]">·</span>
                <button className="text-sm text-[#0969da] hover:underline">See more</button>
              </div>
              {trendingRepos.map((repo) => (
                <div key={repo.name} className="px-4 py-3 border-b border-[#d0d7de] last:border-0 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2 min-w-0">
                    <img src={`https://avatars.githubusercontent.com/${repo.name.split('/')[0]}?size=20`} alt="" className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5" onError={(e) => { e.target.src = "https://github.githubassets.com/images/gravatars/gravatar-user-420.png"; }} />
                    <div className="min-w-0">
                      <a href="#" className="text-sm font-semibold text-[#0969da] hover:underline">{repo.name}</a>
                      <p className="text-xs text-[#57606a] mt-0.5 line-clamp-2">{repo.desc}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="flex items-center gap-1 text-xs text-[#57606a]">
                          <span className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: repo.color }}></span>
                          {repo.lang}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#57606a]">
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>
                          {repo.stars}
                        </span>
                      </div>
                    </div>
                  </div>
                  <StarButton />
                </div>
              ))}
            </div>

            {/* Feed item 2 */}
            <FeedItem {...feedData[1]} />

            {/* Popular projects */}
            <div className="border border-[#d0d7de] rounded-lg bg-white overflow-hidden">
              <div className="px-4 py-3 flex items-center gap-2 border-b border-[#d0d7de]">
                <svg width="16" height="16" fill="#57606a" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/></svg>
                <span className="text-sm font-semibold text-[#1f2328]">Popular projects among</span>
                <span className="text-sm font-semibold text-[#1f2328]">people you follow</span>
              </div>
              {popularProjects.map((repo) => (
                <div key={repo.name} className="px-4 py-3 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2 min-w-0">
                    <img src={`https://avatars.githubusercontent.com/${repo.name.split('/')[0]}?size=20`} alt="" className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5" onError={(e) => { e.target.src = "https://github.githubassets.com/images/gravatars/gravatar-user-420.png"; }} />
                    <div>
                      <a href="#" className="text-sm font-semibold text-[#0969da] hover:underline">{repo.name}</a>
                      <p className="text-xs text-[#57606a] mt-0.5">{repo.desc}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="flex items-center gap-1 text-xs text-[#57606a]">
                          <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: repo.color }}></span>
                          {repo.lang}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#57606a]">
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>
                          {repo.stars}
                        </span>
                      </div>
                    </div>
                  </div>
                  <StarButton />
                </div>
              ))}
            </div>

            {/* Feed item 3 */}
            <FeedItem {...feedData[2]} />
          </div>
        </main>

        {/* Changelog kanan */}
        <aside className="w-[240px] flex-shrink-0 hidden lg:block">
          <h3 className="text-sm font-semibold text-[#1f2328] mb-3">Latest from our changelog</h3>
          <ul className="space-y-3">
            {changelog.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#d0d7de] flex-shrink-0"></span>
                <div>
                  <p className="text-xs text-[#8b949e]">{item.date}</p>
                  <a href="#" className="text-xs text-[#0969da] hover:underline leading-tight">{item.text}</a>
                </div>
              </li>
            ))}
          </ul>
          <a href="#" className="text-xs text-[#0969da] hover:underline mt-3 inline-block">View changelog →</a>
        </aside>

      </div>
    </div>
  );
}