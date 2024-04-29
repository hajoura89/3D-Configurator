import { createContext, useContext, useState } from "react";

const diamondColors = [
    {
        color: "#683434",
        name: "brown",
      },
      {
        color: "#1a5e1a",
        name: "green",
      },
      {
        color: "#659994",
        name: "blue",
      },
      {
        color: "#896599",
        name: "mauve",
      },
      {
        color: "#ffa500",
        name: "orange",
      },
      {
        color: "#59555b",
        name: "grey",
      },
      {
        color: "#222222",
        name: "black",
      },
      {
        color: "#ececec",
        name: "white",
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
  const [diamondColor, setDiamondColor] = useState(diamondColors[7]);
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
