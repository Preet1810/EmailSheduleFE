'use client'
import { useEffect, useState } from "react";
import SearchInput from "../Inputs/SearchInput"
import IconButton from "../Buttons/IconButton";
import { MdAddCircleOutline } from "react-icons/md";
import EmailShedulesTable from "../Tables/EmailShedulesTable";
import { getShedules } from "@/lib/Apis/emailShedulesApis/api";
import { EmailShedulesProps } from "@/lib/type";
import { Popover } from "antd"
import CreateEditShedule from "./CreateEditShedule";
import { useDebounce } from "@/helpers/helper";
const Sheduler = () => {
    const [search, setSearch] = useState<string>("");
    const [isPopper, setIsPopper] = useState<boolean>(false);
    const [shedules, setShedules] = useState<EmailShedulesProps[] | undefined>()

    const debouncedSearch = useDebounce(search, 500);

    const handleOpenChange = (newOpen: boolean) => {
        setIsPopper(newOpen);
    };

    const gettingShedules = (search: string) => {
        setShedules(undefined);
        getShedules(search).then((data) => {
            console.log(data)
            setShedules(data);
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        gettingShedules(debouncedSearch);
    }, [debouncedSearch])

    return (
        <div className='flex flex-col gap-y-6 py-5 px-10'>
            <div className='flex justify-between'>
                <SearchInput
                    id={"searchshedules"}
                    name={"searchshedules"}
                    value={search}
                    onChange={(e) => {
                        setShedules(undefined)
                        setSearch(e.target.value)
                    }}
                />
                <Popover
                    open={isPopper}
                    onOpenChange={handleOpenChange}
                    content={<CreateEditShedule setIsPopper={setIsPopper} mode="create" gettingShedules={gettingShedules} />}
                    trigger="click"
                    placement="bottomLeft">
                    <IconButton
                        onClick={() => setIsPopper(!isPopper)}
                        icon={<MdAddCircleOutline />}
                        name="Add"
                    />
                </Popover>
            </div>
            <EmailShedulesTable
                gettingShedules={gettingShedules}
                shedules={shedules}
            />
        </div>
    )
}

export default Sheduler