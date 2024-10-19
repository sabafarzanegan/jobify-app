type FormSelectType = {
  list: string[];
  name: string;
  value: string | undefined;
  onChange?: () => void;
};
function FormSelect({ list, name, value, onChange }: FormSelectType) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 ">
        {name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full  h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors fill:border-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        {list.map((itemValue, index) => {
          return (
            <option
              className="p-0 dark:text-gray-800"
              key={index}
              value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;
