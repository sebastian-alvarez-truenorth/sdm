import { useField } from 'formik';


const TextInput = (props : any) => {
  const [field, meta] = useField(props)
  const hasError = Boolean(meta.touched && meta.error)

  return (
    <div className="sm:col-span-4">
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          id={props.id || props.name}
          {...field}
          {...props}
          autoComplete="given-name"
          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      {hasError ? <span>{meta.error}</span> : null}
    </div>
  )
};

export default TextInput;
