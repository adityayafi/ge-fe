const InputBox = ({label, placeholder, type}) => {
  return(
    <div className="w-full py-2">
      <p className="text-left py-2 text-lg text-slate-500 font-semibold">{label}</p>
      <input type={type} className="w-full h-14 p-2 border-slate-400 border-4" placeholder={placeholder}/>
    </div>
  )
}

export default InputBox;