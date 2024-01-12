'use client'
import { useEffect, useState } from "react";
import SearchInput from "../Inputs/SearchInput"
import IconButton from "../Buttons/IconButton";
import { MdAddCircleOutline } from "react-icons/md";
import EmailShedulesTable from "../Tables/EmailShedulesTable";
import { getShedules } from "@/lib/Apis/emailShedulesApis/api";
import { EmailShedulesProps } from "@/lib/type";
const Sheduler = () => {
    const [search, setSearch] = useState<string>("");
    const [isPopper, setIsPopper] = useState<boolean>(false);
    const [shedules, setShedules] = useState<EmailShedulesProps[]>([])

    const gettingShedules = () => {
        getShedules().then((data) => {
            console.log(data)
            setShedules(data);
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        gettingShedules();
    }, [])

    return (
        <div className='flex flex-col gap-y-6 py-5 px-10'>
            <div className='flex justify-between'>
                <SearchInput
                    id={"searchshedules"}
                    name={"searchshedules"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IconButton
                    onClick={() => setIsPopper(!isPopper)}
                    icon={<MdAddCircleOutline />}
                    name="Add"
                />
            </div>
            <EmailShedulesTable
                shedules={shedules}
            />
        </div>
    )
}

export default Sheduler