import React from 'react';
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

    return (
        <div className="p-4">
            <div className="configurator__section mb-8">
                <div className="font-bold uppercase">Diamond color</div>
                <div className="flex gap-2 items-center flex-wrap">
                    {diamondColors.map((item, index) => (
                        <div
                            key={index}
                            className={`transition duration-400 flex flex-col items-center ${
                                item.color === diamondColor.color ? "border-2 border-pink-600" : ""
                            }`}
                            onClick={() => setDiamondColor(item)}
                        >
                            <div
                                className="w-6 h-6 rounded-full border border-black"
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="text-xs text-black mt-1">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="configurator__section mb-8">
                <div className="font-bold uppercase">First Metal color</div>
                <div className="flex gap-2 items-center flex-wrap">
                    {firstMetalColors.map((item, index) => (
                        <div
                            key={index}
                            className={`transition duration-400 flex flex-col items-center ${
                                item.color === firstMetalColor.color ? "border-2 border-pink-600" : ""
                            }`}
                            onClick={() => setFirstMetalColor(item)}
                        >
                            <div
                                className="w-6 h-6 rounded-full border border-black"
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="text-xs text-black mt-1">{item.name}</div>
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
                            className={`transition duration-400 flex flex-col items-center ${
                                item.color === secondMetalColor.color ? "border-2 border-pink-600" : ""
                            }`}
                            onClick={() => setSecondMetalColor(item)}
                        >
                            <div
                                className="w-6 h-6 rounded-full border border-black"
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="text-xs text-black mt-1">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Configurator;
