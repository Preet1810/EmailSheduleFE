import { SearchBarProps } from "@/lib/type"
const AddEditSheduleInput = (props: SearchBarProps) => {
    const { id, name, onChange, value, onBlur } = props;
    return (
        <input
            id={id}
            name={name}
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="bg-transparent focus:outline-none w-full h-[38px] rounded-md border-2 border-grey px-3"
        />
    )
}

export default AddEditSheduleInput