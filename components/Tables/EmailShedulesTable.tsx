import Table, { ColumnsType } from "antd/es/table";
import { EmailShedulesProps } from "@/lib/type";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ShedulesTableProps } from "@/lib/type";
import { deleteShedule } from "@/lib/Apis/emailShedulesApis/api";
import { message } from 'antd'
const EmailShedulesTable = (props: ShedulesTableProps) => {
    const { shedules, gettingShedules } = props;

    const sheduleDelete = (id: string) => {
        deleteShedule(id).then((data) => {
            if (data.statusText == "OK") message.success("Shedule Deleted Successfully")
            gettingShedules();
        }).catch((err) => {
            console.log(err)
        })
    }

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
            width: "40rem"
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
            render: (_, { _id }) => (<div className="flex gap-x-4 items-center text-lg">
                <MdEdit className="cursor-pointer" />
                <RiDeleteBin5Line
                    onClick={() => {
                        if (_id) sheduleDelete(_id)
                    }}
                    className="text-purple cursor-pointer hover:text-red-500" />
            </div>),
            className: '!text-[14px] !font-medium !leading-[150%] !text-[#1E3146]'
        },
    ];

    return (
        <div
            className="flex flex-col flex-grow">
            <Table
                loading={shedules ? false : true}
                bordered={false}
                scroll={{ x: 'max-content', y: `calc(100vh - 250px)` }}
                columns={columns}
                dataSource={shedules}
                rowKey={"_id"}
                className='max-w-[100%] max-h-[500px]'
                pagination={false}
                sticky={true}
            />
        </div>
    )
}

export default EmailShedulesTable