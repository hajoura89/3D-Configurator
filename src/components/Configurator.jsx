import React from 'react'
import { useCustomization } from "../contexts/RingCustomization";

const Configurator = () => {
  const {
    diamondColors,
    diamondColor,
    setDiamondColor,
    firstMetalColors,
    firstMetalColor,
    setFirstMetalColor,
    secondMetalColor,
    secondMetalColors,
    setSecondMetalColor,
  } = useCustomization();

  console.log("diamondcolor", setDiamondColor);

  return (
    <div>

        <div className="configurator__section">
            <div className="font-bold uppercase">Diamond color</div>
            <div className="flex gap-2 items-center flex-wrap">
                {diamondColors.map((item, index) => (
                    <div
                    key={index}
                    className={`transition duration-400 flex flex-col ${
                        item.color === diamondColor.color ? "text-white" : ""
                    }`}
                    onClick={() => setDiamondColor(item)}
                    >
                    <div
                        className="w-5 h-5 rounded-full border border-gray-300"
                        style={{ backgroundColor: item.color }}
                    />
                    {/* <div className="text-xs text-gray-400 transition duration-400">{item.name}</div> */}
                    </div>
                ))}
            </div>
        </div>

        <div className="configurator__section">
            <div className="font-bold uppercase">First Metal color</div>
            <div className="flex gap-2 items-center flex-wrap">
                {firstMetalColors.map((item, index) => (
                    <div
                    key={index}
                    className={`transition duration-400 flex flex-col gap-1 ${
                        item.color === firstMetalColor.color ? "text-white" : ""
                    }`}
                    onClick={() => setFirstMetalColor(item)}
                    >
                    <div
                        className="w-5 h-5 rounded-full border border-gray-500"
                        style={{ backgroundColor: item.color }}
                    />
                    <div className="text-xs text-black transition duration-400">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>

        <div className="configurator__section">
            <div className="font-bold uppercase">Second Metal color</div>
            <div className="flex gap-2 items-center flex-wrap">
                {secondMetalColors.map((item, index) => (
                    <div
                    key={index}
                    className={`transition duration-400 flex flex-col gap-1 ${
                        item.color === secondMetalColor.color ? "text-white" : ""
                    }`}
                    onClick={() => setSecondMetalColor(item)}
                    >
                    <div
                        className="w-5 h-5 rounded-full border border-gray-500"
                        style={{ backgroundColor: item.color }}
                    />
                    <div className="text-xs text-black transition duration-400">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Configurator