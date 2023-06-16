const RadioButtons = ({ options, selectedOption, handleOptionSelect }) => {
  return (
    <div>
      {options.map((option) => (
        <li key={option.value}>
          <label>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleOptionSelect(option.value)}
            />
            <span>{option.label}</span>
          </label>
        </li>
      ))}
    </div>
  );
};

export default RadioButtons;
