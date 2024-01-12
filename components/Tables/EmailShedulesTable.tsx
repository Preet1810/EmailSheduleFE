import Table, { ColumnsType } from "antd/es/table";
import { EmailShedulesProps } from "@/lib/type";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ShedulesTableProps } from "@/lib/type";
import "./shedules.css"
const EmailShedulesTable = (props: ShedulesTableProps) => {
    const { shedules } = props;

    const columns: ColumnsType<EmailShedulesProps> = [
        {
            title: 'Title',
            dataIndex: 'title',
            render: (_, { title }) => (<p className="!font-normal">{title}</p>),
            className: '!text-[14px] !font-medium !leading-[150%] !text-[#1E3146] ',
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
            render: (_, { _id }) => (<div className="flex gap-x-4 items-center text-lg"><MdEdit /> <RiDeleteBin5Line className="text-purple" /></div>),
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
                dataSource={shedules}
                className='cursor-pointer max-w-[100%]'
                pagination={false}
            />
        </div>
    )
}

export default EmailShedulesTable