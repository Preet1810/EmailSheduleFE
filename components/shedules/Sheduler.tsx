'use client'
import SearchInput from "../Inputs/SearchInput"
import { useState } from "react";
const Sheduler = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <div className='flex flex-col gap-y-6 p-5'>
            <div className='flex justify-between'>
                <SearchInput
                    id={"searchshedules"}
                    name={"searchshedules"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Sheduler