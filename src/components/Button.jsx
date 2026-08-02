function Button({ text, type = "button", onClick, className }) {
  return (
    <button type={type} onClick={onClick}className={`w-full rounded-xl bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 ${className}`}>{text}</button>
  );
}
export default Button;