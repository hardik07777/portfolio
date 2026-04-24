import { useState, useRef, useEffect } from "react";
import { projects } from "../data/project";

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      type: "text",
      text: "Hi, I'm Hardik's AI assistant 👋 Ask me about projects, skills, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getResponse = (text) => {
    const t = text.toLowerCase();

    if (t.includes("project")) {
      return { type: "projects", text: "Here are some of my projects:" };
    }

    if (t.includes("skill")) {
      return {
        type: "text",
        text: "I work with React, Node.js, C++, TypeScript, AWS, Docker, and more.",
      };
    }

    if (t.includes("experience") || t.includes("work")) {
      return {
        type: "text",
        text: "I’ve worked at Cantilever and Mercor.",
      };
    }

    return {
      type: "text",
      text: "Ask me about projects, skills, or experience 😊",
    };
  };

  const sendMessage = (text) => {
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", type: "text", text }]);

    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [...prev, { role: "bot", ...response }]);
    }, 500);
  };

  return (
    <div className=" h-full flex flex-col justify-between p-6 bg-panel dark:bg-panelDark text-textMain dark:text-textMainDark">
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 ">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-2xl px-4 py-3 ${
               m.role === "user"
                 ? "bg-primary text-white max-w-[60%]"
                 : "bg-white dark:bg-panelDark border border-borderSoft dark:border-borderDark max-w-[75%]"
             }`}
            >
              {m.type === "text" && <p className="leading-relaxed">{m.text}</p>}

              {m.type === "projects" && (
                <div>
                  <p className="mb-2 font-medium">{m.text}</p>
                  <div className="space-y-2">
                    {projects.map((p, idx) => (
                      <a
                        key={idx}
                        href={p.link}
                        target="_blank"
                        className="block border border-borderSoft dark:border-borderDark rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-borderDark"
                      >
                        <h4 className="text-sm font-medium">{p.title}</h4>
                        <p className="text-xs text-textSoft dark:text-textSoftDark">
                          {p.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-2 border-t border-borderSoft dark:border-borderDark pt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 border border-borderSoft dark:border-borderDark bg-white dark:bg-panelDark px-4 py-3 rounded-xl"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(input);
              setInput("");
            }
          }}
        />

        <button
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
          className="px-5 py-3 bg-primary text-white rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}