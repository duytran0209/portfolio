import React from "react";
import { useState } from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

const PortfoliosPage = () => {
  const [menuItem, setMenuItem] = useState(portfolios);
  const [button, setButton] = useState(allButtons);
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <MainLayout padding={"padding-left:20rem"}>
      <Title title={"Portfolios"} span={"Portfolios"}></Title>
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem}></Menu>
      </InnerLayout>
    </MainLayout>
  );
};

export default PortfoliosPage;
