import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const OrgChart = () => {
  const [data, setData] = useState([]);
  let test = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        //this is the sample mock api for organisation structure, it will work for any number of nesting
        const response = await fetch(
          "https://run.mocky.io/v3/ebe16c9f-a95b-4b89-a38b-e1324b06651a"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const transformData = (data) => {
    const result = [];

    const traverse = (node, parentLabel = "") => {
      const { label, value, children } = node;
      const fullLabel = parentLabel ? `${parentLabel}` : label;

      if (parentLabel) {
        result.push({ label: label, value, nodeDept: fullLabel });
      }

      if (children && children.length > 0) {
        children.forEach((child) => traverse(child, fullLabel));
      }
    };

    data.forEach((node) => {
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => traverse(child, node.label));
      }
    });

    return result;
  };

  return (
    <main>
      <h1>Welcome to the department discovery</h1>
      <h3>Kindly select your role</h3>
      <div className="main-container">
      <UserDetails user={transformData(data)} totalData={data} />
      </div>
    </main>
  );
};

export default OrgChart;
