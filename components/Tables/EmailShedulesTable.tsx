import Table, { ColumnsType } from "antd/es/table";
import { EmailShedulesProps } from "@/lib/type";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const EmailShedulesTable = () => {
    const [shedules, setShedules] = useState<EmailShedulesProps[]>()

    const columns: ColumnsType<EmailShedulesProps> = [
        {
            title: 'Title',
            dataIndex: 'title',
            render: (_, { title }) => (<p className="!font-normal">{title}</p>),
            className: '!text-[14px] !font-medium !leading-[150%] !text-[#1E3146]',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (_, { description }) => (<p className="!font-normal">{description}</p>),
            className: '!text-[14px] !font-medium !leading-[150%] !text-[#1E3146]',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            render: (_, { subject }) => (<p className="!font-normal">{subject}</p>),
            className: '!text-[14px] !font-medium !leading-[150%] !text-[#1E3146]',
        },
        {
            title: 'Shedule',
            dataIndex: 'frequency',
            render: (_, { frequency, time }) => (<p className="!font-normal">{frequency + " at " + time}</p>),
            className: '!text-[14px] !font-medium !leading-[150%] !text-[#1E3146]'
        },
        {
            title: 'Actions',
            dataIndex: '_id',
            render: (_, { _id }) => (<div className="flex gap-x-4 items-center"><MdEdit /> <RiDeleteBin5Line /></div>),
            className: '!text-[14px] !font-medium !leading-[150%] !text-[#1E3146]'
        },
    ];
    return (
        <div className="flex flex-col flex-grow overflow-y-auto  w-full">
            <Table
                // loading={users ? false : true}
                bordered={false}
                scroll={{ x: 'max-content' }}

                columns={columns}
                // dataSource={users}
                className='cursor-pointer max-w-[100%]'
            />
        </div>
    )
}

export default EmailShedulesTable