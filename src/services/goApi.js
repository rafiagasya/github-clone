// src/services/goApi.js
// File ini untuk memanggil Go Backend dari React

const GO_API = "http://localhost:8080/api";

/** Simpan / update profil user dari GitHub */
export const saveUser = async (userData) => {
  const res = await fetch(`${GO_API}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

/** Ambil profil user berdasarkan username */
export const getUser = async (username) => {
  const res = await fetch(`${GO_API}/users/${username}`);
  return res.json();
};

/** Simpan repo dari GitHub ke database */
export const saveRepo = async (repoData) => {
  const res = await fetch(`${GO_API}/repos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(repoData),
  });
  return res.json();
};

/** Ambil semua repo yang tersimpan milik user */
export const getReposByUser = async (userId) => {
  const res = await fetch(`${GO_API}/repos/user/${userId}`);
  return res.json();
};

/** Buat catatan baru */
export const createNote = async (noteData) => {
  const res = await fetch(`${GO_API}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return res.json();
};

/** Ambil semua catatan milik user */
export const getNotesByUser = async (userId) => {
  const res = await fetch(`${GO_API}/notes/user/${userId}`);
  return res.json();
};

/** Update catatan berdasarkan ID */
export const updateNote = async (noteId, noteData) => {
  const res = await fetch(`${GO_API}/notes/${noteId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return res.json();
};

/** Hapus catatan berdasarkan ID */
export const deleteNote = async (noteId) => {
  const res = await fetch(`${GO_API}/notes/${noteId}`, {
    method: "DELETE",
  });
  return res.json();
};

/** Bookmark sebuah repo */
export const createBookmark = async (bookmarkData) => {
  const res = await fetch(`${GO_API}/bookmarks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookmarkData),
  });
  return res.json();
};

/** Ambil semua bookmark milik user */
export const getBookmarksByUser = async (userId) => {
  const res = await fetch(`${GO_API}/bookmarks/user/${userId}`);
  return res.json();
};

/** Hapus bookmark berdasarkan ID */
export const deleteBookmark = async (bookmarkId) => {
  const res = await fetch(`${GO_API}/bookmarks/${bookmarkId}`, {
    method: "DELETE",
  });
  return res.json();
};
/*
  // Di komponen React kamu, contohnya di Home.jsx atau Sidebar.jsx:

  import { saveUser, getBookmarksByUser, createBookmark } from '../services/goApi';

  // Simpan user saat login GitHub
  await saveUser({
    github_username: "rafiagasya",
    name: "Rafi",
    bio: "Developer",
    avatar_url: "https://avatars.githubusercontent.com/...",
    location: "Indonesia"
  });

  // Bookmark sebuah repo
  await createBookmark({
    user_id: 1,
    repo_name: "rafiagasya/my-project",
    repo_url: "https://github.com/rafiagasya/my-project",
    description: "Project keren",
    language: "JavaScript",
    stars: 10
  });

  // Ambil semua bookmark
  const result = await getBookmarksByUser(1);
  console.log(result.data); // array of bookmarks
*/