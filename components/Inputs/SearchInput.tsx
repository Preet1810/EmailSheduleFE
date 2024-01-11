import { SearchBarProps } from "@/lib/type";
import { IoMdSearch } from "react-icons/io";
const SearchInput = (props: SearchBarProps) => {
    const { id, name, onChange, value } = props;
    return (
        <div className="flex items-center w-[300px] h-[38px] rounded-md border-2 border-grey px-3">
            <input
                id={id}
                name={name}
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search"
                className="bg-transparent focus:outline-none w-full"
            />
            <IoMdSearch className="text-2xl" />
        </div>

    )
}

export default SearchInput