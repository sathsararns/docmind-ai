import React, { useRef, useState } from "react";
import {
  PaperclipIcon,
  SendHorizontalIcon,
  SlashIcon,
} from "lucide-react";

type ComposerProps = {
  onSubmit: (message: string) => void;
  onFileUpload?: (file: File) => void;
};

export function Composer({
  onSubmit,
  onFileUpload,
}: ComposerProps) {
  const [message, setMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!message.trim()) return;

    onSubmit(message.trim());
    setMessage("");
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (onFileUpload) {
      onFileUpload(file);
    }

    e.target.value = "";
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-lg backdrop-blur"
    >
      <label htmlFor="composer" className="sr-only">
        Ask anything about your documents
      </label>

      <textarea
        id="composer"
        rows={3}
        value={message}
        placeholder="Ask anything about your documents..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        className="w-full resize-none bg-transparent text-base text-white placeholder:text-slate-500 outline-none"
      />

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            hidden
            onChange={handleFileChange}
          />

          {/* Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-slate-300 transition hover:border-cyan-500 hover:text-white"
          >
            <PaperclipIcon size={18} />
          </button>

          {/* Slash Command Button */}
          <button
            type="button"
            className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-slate-300 transition hover:border-cyan-500 hover:text-white"
          >
            <SlashIcon size={18} />
          </button>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={!message.trim()}
          className="rounded-xl bg-cyan-600 p-3 text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
        >
          <SendHorizontalIcon size={18} />
        </button>
      </div>
    </form>
  );
}