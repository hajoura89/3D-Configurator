import { createContext, useContext, useState } from "react";

const diamondColors = [
      {
        color: "#f70db1",
        name: "ruby",
      },
      {
        color: "#CFECEC",
        name: "faint",
      },
      {
        color: "#a9cbe2",
        name: "fancy",
      },
      {
        color: "#62cffe",
        name: "aqua",
      },
      {
        color: "#76dce4",
        name: "swiss",
      },
      {
        color: "#efe75b",
        name: "yellow",
      },
      {
        color: "#eb8e17",
        name: "orange",
      },
      {
        color: "#17ebb5",
        name: "green",
      },
      {
        color: "#5eca00",
        name: "emerald",
      },
      {
        color: "#fa37d7",
        name: "rose",
      },
      {
        color: "#c200f2",
        name: "violet",
      },
];

const firstMetalColors = [
  {
    color: "#C0C0C0",
    name: "silver",
  },
  {
    color: "#FFBD19",
    name: "gold",
  },
  {
    color: "#B76E79",
    name: "rose",
  },
];
const secondMetalColors = [
  {
    color: "#C0C0C0",
    name: "silver",
  },
  {
    color: "#FFBD19",
    name: "gold",
  },
  {
    color: "#B76E79",
    name: "rose",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [diamondColor, setDiamondColor] = useState(diamondColors[1]);
  const [firstMetalColor, setFirstMetalColor] = useState(firstMetalColors[1]);
  const [secondMetalColor, setSecondMetalColor] = useState(secondMetalColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        diamondColors,
        diamondColor,
        setDiamondColor,
        firstMetalColors,
        firstMetalColor,
        setFirstMetalColor,
        secondMetalColor,
        secondMetalColors,
        setSecondMetalColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
