interface Props {
  name: string;
  label: string;
  type: 'email' | 'text' | 'tel';
  placeholder?: string;
}

function TextInput({
  name,
  label,
  type = 'text',
  placeholder,
  ...props
}: Props) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={`${name}_field`}
        className="block w-full max-h-10 border border-color-slate rounded-md px-5 py-3 text-base text-color-slate placeholder-color-slate shadow-sm focus:border-color-red"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default TextInput;
