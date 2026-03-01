import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#d0d7de] fixed top-0 left-0 right-0 z-50 h-[62px] flex items-center px-4">

      {/* Kiri: hamburger + logo + Dashboard */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-[#f6f8fa] text-[#57606a]">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <Link to="/">
          <svg height="32" viewBox="0 0 16 16" width="32" fill="#1f2328">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </Link>
        <span className="text-sm font-semibold text-[#1f2328]">Dashboard</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Kanan: search + icons */}
      <div className="flex items-center gap-2">

        {/* Search */}
        <div className="flex items-center border border-[#d0d7de] rounded-md px-3 h-[30px] gap-2 w-[220px] bg-white hover:border-[#0969da] cursor-text">
          <svg width="14" height="14" fill="#8b949e" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <input type="text" placeholder="Type / to search" className="bg-transparent text-sm text-[#1f2328] placeholder-[#8b949e] outline-none w-full"/>
          <kbd className="text-[#8b949e] text-xs border border-[#d0d7de] rounded px-1">/</kbd>
        </div>

        {/* Copilot */}
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d0d7de] hover:bg-[#f6f8fa] text-[#57606a]">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"/>
          </svg>
        </button>

        {/* Plus dropdown */}
        <button className="flex items-center gap-0.5 px-2 py-1 rounded-md hover:bg-[#f6f8fa] text-[#57606a] border border-[#d0d7de]">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          <svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </button>

        {/* Issues icon */}
        <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-[#f6f8fa] text-[#57606a]">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/>
          </svg>
        </button>

        {/* PR icon */}
        <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-[#f6f8fa] text-[#57606a]">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z"/>
          </svg>
        </button>

        {/* Bell notif */}
        <button className="relative flex items-center justify-center w-8 h-8 rounded-md hover:bg-[#f6f8fa] text-[#57606a]">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2ZM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.921L8 1.918ZM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6Z"/>
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#0969da] rounded-full border-2 border-white"></span>
        </button>

        {/* Avatar */}
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-0.5">
            <img
              src="https://github.githubassets.com/images/gravatars/gravatar-user-420.png"
              alt="avatar"
              className="w-8 h-8 rounded-full border border-[#d0d7de]"
            />
            <svg width="10" height="10" fill="#57606a" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-[#d0d7de] rounded-lg shadow-xl py-2 z-50">
              <div className="px-4 py-2 border-b border-[#d0d7de] mb-1">
                <p className="text-xs text-[#57606a]">Signed in as</p>
                <p className="text-sm font-semibold text-[#1f2328]">username</p>
              </div>
              {["Your profile", "Your repositories", "Your codespaces", "Your organizations", "Your projects", "Your stars"].map((item) => (
                <button key={item} className="w-full text-left px-4 py-1.5 text-sm text-[#1f2328] hover:bg-[#f6f8fa]">{item}</button>
              ))}
              <div className="border-t border-[#d0d7de] my-1"></div>
              <button className="w-full text-left px-4 py-1.5 text-sm text-[#1f2328] hover:bg-[#f6f8fa]">Settings</button>
              <div className="border-t border-[#d0d7de] my-1"></div>
              <Link to="/login" className="block px-4 py-1.5 text-sm text-[#1f2328] hover:bg-[#f6f8fa]">Sign out</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}