import { NormalButtonProps } from "@/lib/type"
const NormalButton = (props: NormalButtonProps) => {
    const { name, onClick, bgcolor, textcolor } = props;
    return (
        <button
            type="submit"
            style={{ backgroundColor: bgcolor, color: textcolor }}
            onClick={onClick}
            className={`w-[88px] h-[32px] rounded-md `}
        >
            {name}
        </button>
    )
}

export default NormalButton