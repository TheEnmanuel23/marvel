// @vendors
import React, { useState } from "react";
// @components
import ComicList from "./List";
import { FormGroup } from "../../components/FormGroup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ISSUE_FORMAT } from "../../utilities/constants";
import { Select } from "../../components/Select";

const getOptions = () => {
  const options = [
    {
      value: "",
      label: "",
    },
  ];
  for (const [value, label] of Object.entries(ISSUE_FORMAT)) {
    options.push({ label, value });
  }
  return options;
};

function Comics() {
  const [filters, setFilters] = useState({});
  const [title, setTitle] = useState("");
  const [issueNumber, setIssueNumber] = useState("");
  const [format, setFormat] = useState("");

  const onFilter = () => {
    let filterBy: { [x: string]: any } = {};

    if (title) {
      filterBy.titleStartsWith = title;
    }
    if (issueNumber) {
      filterBy.issueNumber = Number(issueNumber);
    }
    if (format) {
      filterBy.format = format;
    }

    setFilters(filterBy);
  };

  const options = getOptions();

  return (
    <div>
      <div>
        <h3>Filter by</h3>
        <FormGroup>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Comic title"
          />
          <Input
            type="numeric"
            onChange={(e) => setIssueNumber(e.target.value)}
            placeholder="Issue number"
          />
          <Select onChange={(e) => setFormat(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormGroup>
        <Button onClick={onFilter}>Filter</Button>
      </div>
      <ComicList filters={filters} />
    </div>
  );
}

export default Comics;
