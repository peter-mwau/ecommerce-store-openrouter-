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
      const response = await runner(model, message);
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
    <div>
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-purple-500 text-white p-2 mt-2"
        onClick={handleSearch()}
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
