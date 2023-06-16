import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import RadioButtons from "./CustomCheckBox";
import { setFilterOption } from "../redux/Filter/filterSlice";
import { options } from "./options";

import s from "./filter.module.css";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("show all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterOption(selectedOption));
  }, [dispatch, selectedOption]);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption("");
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div>
      <div>
        <button type="button" onClick={handleFilterClick} className={s.link}>
          Filter
        </button>
      </div>
      {isOpen && (
        <div>
          <RadioButtons
            options={options}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
