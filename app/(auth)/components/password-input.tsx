"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({
  name = "password",
  placeholder = "••••••••",
}: {
  name?: string;
  placeholder?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        minLength={6}
        required
        className="w-full bg-app-background border border-app-border rounded-lg px-4 py-2.5 pr-10 text-app-text text-sm outline-none focus:border-primary transition placeholder:text-app-text-muted"
      />
      {/* Bouton toggle visibilité */}
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-app-text-muted hover:text-app-text transition cursor-pointer"
      >
        {visible ? (
          <FaEyeSlash className="w-4 h-4" />
        ) : (
          <FaEye className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
