# 📝 Google Docs Clone

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.22-orange?logo=firebase)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4-purple?logo=vite)](https://vitejs.dev/)

A real-time collaborative document editor with Firebase integration, featuring anonymous authentication and automatic content synchronization.

![Demo Preview](https://via.placeholder.com/800x400.png?text=Google+Docs+Clone+Demo) *Replace with actual screenshot*

## ✨ Features

- **Real-time Collaboration**  
  Instant document updates using Firestore listeners
- **Rich Text Editing**  
  Powerful WYSIWYG editor with ReactQuill
- **Anonymous Auth**  
  Seamless authentication with Firebase Anonymous sign-in
- **Auto-save**  
  Throttled content saving to Firestore (1s interval)
- **Cursor Preservation**  
  Maintains cursor position during remote updates
- **Offline Support**  
  Built-in Firestore offline persistence

## 🚀 Getting Started

### Prerequisites
- Node.js ≥16
- Firebase project with Firestore enabled

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/google-docs-clone.git
cd google-docs-clone
