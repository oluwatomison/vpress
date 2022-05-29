const AppSelect = ({items, handleChange, selected}) => {
  const handleSelectChange = (e) => {
    handleChange(e.target.value);
  };

  return (
    <div>
      <label>
        <select
          value={selected}
          onChange={handleSelectChange}
          className="bg-[#00aec7] h-[30px] w-[120px] text-[#f3f2f2] outline-none">
          {items.map((item) => {
            return (
              <option key={item.key} value={item.key}>
                {item.title}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default AppSelect;
