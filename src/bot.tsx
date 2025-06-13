import { useState, type ChangeEvent, type KeyboardEvent } from "react";

type text = {
  user: string;
  message: string;
};
const BOT = () => {
  const [string, setString] = useState("");
  const [message, setMessage] = useState<text[]>([]);

  const handleSendMessage = () => {
    if (string.trim()) {
      setMessage((prev) => [...prev, { user: "user", message: string.trim() }]);
      setString("");

      setTimeout(() => {
        setMessage((prev) => [
          ...prev,
          { user: "bot", message: "Hello, how can I help you today?" },
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setString(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* navbar */}
      <nav className="w-full h-10 bg-white border-b border-neutral-200 flex items-center px-4">
        <span className="text-sm font-medium">Chat Bot</span>
      </nav>

      {/* content screen */}
      <div className="w-full flex-1 bg-white relative overflow-hidden">
        {/* icon */}
        <div
          className={`w-10 h-10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            message.length > 0
              ? "bg-green-300 scale-100"
              : "bg-red-300 scale-[200%]"
          }`}
        ></div>

        {/* messages */}
        <div className="absolute inset-0 p-4 overflow-y-auto">
          {message.map((item, index) => (
            <div
              key={index}
              className={`mb-2 rounded-lg flex gap-2 w-fit ${
                item.user === "user"
                  ? "flex-row mr-auto"
                  : "ml-auto flex-row-reverse"
              }`}
            >
              {item.user === "user" ? (
                <div className="bg-red-100 w-5 h-5 rounded-full"></div>
              ) : (
                <div className="bg-red-100 w-5 h-5 rounded-full"></div>
              )}
              <div
                className={` p-2 rounded-lg  ${
                  item.user === "user"
                    ? "bg-blue-100 mr-auto flex-row"
                    : "bg-green-100 ml-auto flex-row-reverse"
                }`}
              >
                {item.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* message input */}
      <div className="w-full p-2 bg-gray-50 border-t border-neutral-200">
        <div className="border border-neutral-200 rounded-lg w-full p-2 bg-white">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message here..."
              className="w-full outline-none"
              value={string}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOT;
