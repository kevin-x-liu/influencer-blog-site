import "./App.css";
import React from "react";
import SignUp from "./components/authentication/SignUp";
import { AuthProvider } from "./components/authentication/context/AuthContext";
import HomePage from "./components/home/HomePage";
import FormProvider from "./context/ForumContext";
import CommentProvider from "./context/CommentContext";
import BlogPostProvier from "./context/BlogPostContext";
import BlogPostProvider from "./context/BlogPostContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <FormProvider>
          <CommentProvider>
            <BlogPostProvider>
              <HomePage />
            </BlogPostProvider>
          </CommentProvider>
        </FormProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
