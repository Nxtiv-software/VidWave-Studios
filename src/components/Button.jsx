function Button({ children }) {
  return (
    <button className="border-none border-white px-4 py-2 rounded-sm mt-5 text-white shadow-[0_0_10px_rgba(255,255,255,0.5)]">
      {children}
    </button>
  );
}

export default Button;