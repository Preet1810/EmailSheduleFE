import { useState } from "react"

const week = [
    {
        label: "S",
        value: "Sunday"
    },
    {
        label: "M",
        value: "Monday"
    },
    {
        label: "T",
        value: "Tuesday"
    },
    {
        label: "W",
        value: "Wednesday"
    },
    {
        label: "T",
        value: "Thursday"
    },
    {
        label: "F",
        value: "Friday"
    },
    {
        label: "S",
        value: "Saturday"
    },

]

const SelectWeekDay = ({ formik }: any) => {
    return (
        <div className="w-full flex gap-x-2 justify-between">
            {week.map((day, index) => (
                <div
                    key={index}
                    onClick={() => {
                        formik.setFieldValue('repeat', day.value)
                    }}
                    className={`rounded-full w-6 h-6 border border-gray-400 flex items-center justify-center cursor-pointer ${formik.values.repeat === day.value ? "bg-purple text-white" : ""}`}>
                    <p className="text-[14px] font-[600] ">{day.label}</p>
                </div>
            ))}
        </div>
    )
}

export default SelectWeekDay