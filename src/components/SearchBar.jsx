import { Search } from "lucide-react";
import { runner } from "../config/openRouter";
import { useState } from "react";
import { toast } from "react-toastify";

function SearchBar(props) {
  const [model, setModel] = useState("openai/gpt-4o");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    setLoading(true);

    if (message.trim() === "") {
      toast.error("Please enter a search query.");
      setLoading(false);
      return;
    }

    try {
      const messages = [
        {
          role: "system",
          content: "You are a helpful assistant for an e-commerce store.",
        },
        { role: "user", content: message },
      ];
      const response = await runner(model, messages);
      console.log("OpenRouter Response:", response);
      toast.success("Search completed successfully!");
      // Handle the response as needed, e.g., update state or display results
    } catch (error) {
      console.error("Error fetching from OpenRouter:", error);
      toast.error("An error occurred while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row gap-4 my-auto rounded-lg p-2">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 w-full bg-amber-50 border rounded-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-purple-500 text-white p-2 my-auto rounded-lg hover:bg-purple-600 disabled:opacity-50 hover:cursor-pointer"
        onClick={handleSearch}
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
