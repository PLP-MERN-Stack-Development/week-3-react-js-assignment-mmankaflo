const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-accent text-white px-4 py-2 rounded hover:bg-primary transition"
  >
    {text}
  </button>
)
