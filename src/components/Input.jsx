function Input({label,type,name,value,onChange,placeholder,}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}className="w-full rounded-xl border border-gray-300 px-4 py-3"/>
    </div>
  );
}
export default Input;