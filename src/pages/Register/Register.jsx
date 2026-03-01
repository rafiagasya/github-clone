import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GitHubIcon = () => (
  <svg height="48" viewBox="0 0 16 16" width="48" fill="#1f2328">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: connect to backend
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f6f8fa] flex flex-col items-center justify-center py-12">
      {/* Logo */}
      <div className="mb-4">
        <GitHubIcon />
      </div>

      <h1 className="text-2xl font-semibold text-[#1f2328] mb-4">Create your account</h1>

      {/* Form Box */}
      <div className="w-full max-w-sm bg-white border border-[#d0d7de] rounded-lg p-6 shadow-sm">
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#1f2328] mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border border-[#d0d7de] rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da]/20 bg-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#1f2328] mb-1">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-[#d0d7de] rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da]/20 bg-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#1f2328] mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-[#d0d7de] rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#0969da] focus:ring-2 focus:ring-[#0969da]/20 bg-white"
              required
            />
            <p className="text-xs text-[#57606a] mt-1">Password must be at least 8 characters</p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a7f37] hover:bg-[#2da44e] text-white text-sm font-semibold py-1.5 rounded-md transition-colors"
          >
            Create account
          </button>
        </form>
      </div>

      {/* Login link */}
      <div className="w-full max-w-sm mt-4 border border-[#d0d7de] rounded-lg py-4 text-center bg-white">
        <p className="text-sm text-[#57606a]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0969da] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>

      <footer className="mt-8 flex gap-4 text-xs text-[#8b949e]">
        {["Terms", "Privacy", "Security", "Contact GitHub"].map((link) => (
          <a key={link} href="#" className="hover:text-[#0969da] hover:underline">{link}</a>
        ))}
      </footer>
    </div>
  );
}