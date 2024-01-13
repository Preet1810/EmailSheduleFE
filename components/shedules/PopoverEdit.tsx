import { useState } from "react";
import { message, Popover } from 'antd'
import CreateEditShedule from "../shedules/CreateEditShedule";
import { Dispatch, SetStateAction } from 'react'
import { MdEdit } from "react-icons/md";
import { PopoverEditProps } from "@/lib/type";
const PopoverEdit = (props: PopoverEditProps) => {
    const { gettingShedules, sheduleId } = props
    const [isPopper, setIsPopper] = useState(false)

    const handleOpenChange = (newOpen: boolean) => {
        setIsPopper(newOpen);
    };

    return (
        <Popover
            open={isPopper}
            onOpenChange={handleOpenChange}
            content={<CreateEditShedule sheduleId={sheduleId} setIsPopper={setIsPopper} mode="edit" gettingShedules={gettingShedules} />}
            trigger="click"
            placement="bottom"
        >
            <MdEdit onClick={() => setIsPopper(!isPopper)} className="cursor-pointer" />
        </Popover>
    )
}

export default PopoverEdit