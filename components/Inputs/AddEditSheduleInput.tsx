import { SearchBarProps } from "@/lib/type"
import { Input } from 'antd';
const AddEditSheduleInput = (props: SearchBarProps) => {
    const { id, name, onChange, value, onBlur, error } = props;
    return (
        <Input
            id={id}
            name={name}
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="bg-transparent focus:outline-none w-full h-[38px] rounded-md border-2 border-grey px-3"
            status={error ? "error" : ""}
            allowClear
        />
    )
}

export default AddEditSheduleInput