import React, { useEffect, useState } from "react";
import Select from "react-select";

const UserDetails = (props) => {
  const { user, totalData } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  //the function to find out the level and levels below given a particular role
  function findLabelsInChildren(data, label) {
    let labels = [];

    function traverse(node) {
      if (node.label === label) {
        labels.push(node.label);
      }

      if (node.children && node.children.length > 0 && node.label === label) {
        node.children.forEach((child) => {
          labels.push(child.label);
        });
      }
    }

    data.forEach((node) => {
      traverse(node);
    });
    return labels;
  }

  const handleOptionChange = (selected) => {
    findLabelsInChildren(totalData, selected);
    setSelectedOption(selected);
  };

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const filterOptions = (option, inputValue) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  const selectContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  };

  return (
    <div style={selectContainerStyle} data-testid="custom-select" >
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        onInputChange={handleInputChange}
        options={user}
        filterOption={filterOptions}
        placeholder="Search"
        label="Search"
      />

      {selectedOption?.nodeDept ? (
        <p>
          You are assigned to the: <b>{selectedOption.nodeDept}</b> department
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default UserDetails;
