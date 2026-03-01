import { Link } from "react-router-dom";

const MergeIcon = () => (
  <svg width="14" height="14" fill="white" viewBox="0 0 16 16">
    <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"/>
  </svg>
);

export default function FeedItem({ user, repo, action, time, title, badge, summary, reactions, comments }) {
  return (
    <div className="border border-[#d0d7de] rounded-lg bg-white overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="relative flex-shrink-0">
              <img
                src={`https://avatars.githubusercontent.com/${user}?size=40`}
                alt={user}
                className="w-9 h-9 rounded-full"
                onError={(e) => { e.target.src = "https://github.githubassets.com/images/gravatars/gravatar-user-420.png"; }}
              />
              {/* Bot badge */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#8250df] rounded-full flex items-center justify-center">
                <svg width="8" height="8" fill="white" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"/></svg>
              </span>
            </div>
            <div>
              <p className="text-sm text-[#57606a]">
                <Link to={`/${user}`} className="font-semibold text-[#1f2328] hover:underline hover:text-[#0969da]">{user}</Link>
                {" "}{action}{" "}
                <Link to={`/${repo}`} className="font-semibold text-[#1f2328] hover:underline hover:text-[#0969da]">{repo}</Link>
              </p>
              <p className="text-xs text-[#8b949e]">{time}</p>
            </div>
          </div>
          <button className="text-[#8b949e] hover:text-[#1f2328] p-1 rounded-md hover:bg-[#f6f8fa] flex-shrink-0">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>
          </button>
        </div>

        {/* Title */}
        {title && (
          <h3 className="text-base font-semibold text-[#1f2328] mt-3 hover:text-[#0969da] cursor-pointer">{title}</h3>
        )}

        {/* Badge */}
        {badge && (
          <div className="mt-2 flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
              badge === "Merged" ? "bg-[#8250df] text-white" :
              badge === "Open" ? "bg-[#1a7f37] text-white" : "bg-[#cf222e] text-white"
            }`}>
              <MergeIcon />
              {badge}
            </span>
            <span className="text-xs text-[#57606a]">{user} merged 2 commits</span>
          </div>
        )}

        {/* Summary */}
        {summary && (
          <div className="mt-3 border border-[#d0d7de] rounded-md overflow-hidden">
            <div className="px-3 py-2 bg-[#f6f8fa] border-b border-[#d0d7de]">
              <p className="text-xs font-semibold text-[#1f2328]">Summary by CodeRabbit</p>
            </div>
            <div className="px-3 py-2">
              {summary.map((section, i) => (
                <div key={i} className="mb-2">
                  <p className="text-sm font-medium text-[#1f2328]">• {section.title}</p>
                  {section.items.map((item, j) => (
                    <p key={j} className="text-sm text-[#57606a] ml-3">○ {item}</p>
                  ))}
                </div>
              ))}
              <button className="text-sm text-[#0969da] hover:underline mt-1">Read more</button>
            </div>
          </div>
        )}
      </div>

      {/* Footer: reactions + comments */}
      <div className="px-4 py-2 border-t border-[#d0d7de] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="text-[#8b949e] hover:text-[#1f2328] p-1 rounded-md hover:bg-[#f6f8fa]">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM4.5 7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM5.5 9.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V10a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V10a.5.5 0 0 0-.5-.5ZM5 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.5-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/></svg>
          </button>
          {reactions && (
            <span className="flex items-center gap-1 text-xs text-[#57606a] bg-[#f6f8fa] border border-[#d0d7de] rounded-full px-2 py-0.5">
              ❤️ {reactions}
            </span>
          )}
        </div>
        {comments && (
          <button className="flex items-center gap-1.5 text-xs text-[#57606a] hover:text-[#0969da]">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Z"/></svg>
            {comments} comments
          </button>
        )}
      </div>
    </div>
  );
}