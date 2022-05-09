import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ISourceOptions } from "tsparticles-engine";
import { useCallback } from "react";

const particlesOptions: ISourceOptions = {
    fullScreen: {
        enable: false,
        zIndex: 0
    },
    particles: {
        reduceDuplicates: true,
        move: {
            bounce: false,
            direction: "top",
            enable: true,
            outModes: "out",
            random: true,
            angle: 45,
            speed: {
                min: 2,
                max: 7,
            },
            straight: false,
            gravity: {
                acceleration: {
                    min: 1,
                    max: 2
                },
                enable: true,
                inverse: true,
                maxSpeed: {
                    min: 2,
                    max: 7
                },
            },
        },
        rotate: {
            value: {
                min: 0,
                max: 360
            },
            animation: {
                enable: true,
                speed: {
                    min: 2,
                    max: 5,
                }
            }

        },
        number: {
            limit: 6
        },
        opacity: {
            value: 1
        },
        shape: {
            type: "images",
            options: {
                images: [
                    {
                        src: "/circle.png",
                        width: 1024,
                        height: 853
                    },
                    {
                        src: "/cross.png",
                        width: 1024,
                        height: 853
                    },
                    {
                        src: "/square.png",
                        width: 1024,
                        height: 853
                    },
                    {
                        src: "/triangle.png",
                        width: 1024,
                        height: 853
                    }
                ],
            }
        },

        size: {
            value: {
                min: 15,
                max: 35
            },
        }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
};


export default function FloatingShapes() {
    const particlesInit = useCallback((engine: Engine) => {
        loadSlim(engine);
    }, []) as (engine: Engine) => Promise<void>;
    return (
        <div className="absolute min-h-screen max-w-full z-0">
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
        </div>
    );
}
