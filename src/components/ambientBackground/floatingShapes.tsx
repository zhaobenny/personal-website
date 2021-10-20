import Circle from "./circle";
import Cross from "./cross";
import Square from "./square";
import Triangle from "./triangle";

export default function FloatingShapes() {
    return (
        <div className="shapes overflow-hidden max-w-full">
            <Square />
            <Circle />
            <Cross />
            <Triangle />
            <Square />
            <Circle />
            <Cross />
            <Triangle />
            <Square />
            <Circle />
        </div>
    );
}
