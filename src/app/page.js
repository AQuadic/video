"use client";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import ReactPlayer from "react-player";

export default function Home() {
 
  return (
    <div className="flex h-screen items-center justify-center">
      This is a protected page.
      <button
        onClick={() => {
          signIn();
        }}
      >
        goooooooooooooogle
      </button>
    </div>
  );
}
