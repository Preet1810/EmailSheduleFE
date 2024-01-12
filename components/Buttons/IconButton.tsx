import { IconButtonProps } from "@/lib/type";

const IconButton = (props: IconButtonProps) => {
    const { icon, name, onClick } = props;
    return (
        <button
            onClick={onClick}
            className="bg-purple w-[73px] h-[38px] rounded-md flex items-center justify-center text-white  px-2"
        >
            <div className="w-1/2 text-2xl">
                {icon}
            </div>
            <span className="w-1/2">{name}</span>
        </button>
    )
}

export default IconButton