import { CreateEditSheduleProps } from "@/lib/type"
import AddEditSheduleLabel from "../Labels/AddEditSheduleLabel"
import AddEditSheduleInput from "../Inputs/AddEditSheduleInput"
import { useFormik } from "formik"
import NormalButton from "../Buttons/NormalButton"
import { Select } from "antd"
import SelectWeekDay from "./SelectWeekDay"
import TimePickerUI from "./TimePickerUI"
import { createShedule, editShedule } from "@/lib/Apis/emailShedulesApis/api"
import { EmailShedulesProps } from "@/lib/type"
import { message } from "antd"
import { getSingleShedule } from "@/lib/Apis/emailShedulesApis/api"
import { useEffect, useCallback, useState } from "react"
const CreateEditShedule = (props: CreateEditSheduleProps) => {
    const { mode, setIsPopper, gettingShedules, sheduleId } = props

    const initialValues = {
        title: "",
        description: "",
        subject: "",
        frequency: "Daily",
        repeat: "",
        time: ""
    }



    const getShedule = (id: string) => {
        console.log("yo");
        getSingleShedule(id).then((data) => {
            console.log(data);
            formik.setValues({
                ...data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    const sheduleEdit = (values: EmailShedulesProps, id: string) => {
        editShedule(values, id)
            .then((data) => {
                if (data.statusText == "OK") message.success("Shedule Edited Successfully")
                gettingShedules();
            }).catch((err) => {
                console.log(err)
            })
    }


    const sheduleCreate = (values: EmailShedulesProps) => {
        createShedule(values)
            .then((data) => {
                if (data.statusText == "OK") message.success("Shedule Created Successfully")
                gettingShedules();
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values, { resetForm }) => {
            try {
                if (mode === "create") {
                    sheduleCreate(values)
                } else if (mode === "edit" && sheduleId) {
                    sheduleEdit(values, sheduleId)
                }
                resetForm()
                setIsPopper(false);
            } catch (error) {
                console.log(error)
            }
        }
    })


    useEffect(() => {
        console.log("i ran", mode, sheduleId);
        if (mode === "edit" && sheduleId) getShedule(sheduleId);
    }, [mode, sheduleId]);
    return (
        <div className="w-[336px] h-[400px] flex flex-col gap-y-5">
            <h2 className="text-[16px] font-[600] text-[#333333]">{mode === "create" ? "Add" : "Edit"} Schedule</h2>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-4">
                <div className="flex gap-x-6 items-center">
                    <AddEditSheduleLabel
                        htmlFor="title"
                        title="Title"
                    />
                    <AddEditSheduleInput
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="flex gap-x-6">
                    <AddEditSheduleLabel
                        className="mt-1"
                        htmlFor="description"
                        title="Description"
                    />
                    <textarea
                        className="bg-transparent focus:outline-none w-full rounded-md border-2 border-grey py-2 px-3 resize-none"
                        name="description"
                        id="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        rows={2}></textarea>
                </div>
                <div className="flex gap-x-6 items-center">
                    <AddEditSheduleLabel
                        htmlFor="subject"
                        title="Subject"
                    />
                    <AddEditSheduleInput
                        id="subject"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="flex gap-x-6 items-center">
                    <AddEditSheduleLabel
                        htmlFor="frequency"
                        title="Frequency"
                    />
                    <Select
                        value={formik.values.frequency}
                        style={{ width: '100%' }}
                        onChange={(value) => formik.setFieldValue('frequency', value)}
                        options={[
                            { value: 'Daily', label: 'Daily' },
                            { value: 'Monthly', label: 'Monthly' },
                            { value: 'Yearly', label: 'Yearly' },
                        ]}
                    />
                </div>
                {formik.values.frequency !== "Daily" && (
                    <div className="flex gap-x-6 items-center">
                        <AddEditSheduleLabel
                            htmlFor="repeat"
                            title="Repeat"
                        />
                        <SelectWeekDay
                            formik={formik}
                        />
                    </div>
                )}
                <div className="flex gap-x-6 items-center">
                    <AddEditSheduleLabel
                        htmlFor="time"
                        title="Time"
                    />
                    <TimePickerUI
                        mode={mode}
                        formik={formik}
                    />
                </div>

                <div className="flex gap-x-[16px] ml-auto">
                    <button
                        onClick={(e) => {
                            if (mode === "create") {
                                formik.handleReset(e)
                            } else {
                                getShedule(sheduleId || "")
                            }
                            setIsPopper(false)
                        }}
                        type="button"
                        className={`w-[88px] h-[32px] rounded-md bg-[#EBE8EF] text-[#333333]`}
                    >
                        Cancel
                    </button>
                    <NormalButton
                        bgcolor="#391E5A"
                        name={mode === "create" ? "Add" : "Edit"}
                        textcolor="#FFFFFF"
                    />
                </div>
            </form >
        </div >
    )
}

export default CreateEditShedule