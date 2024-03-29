import { Dispatch, SetStateAction } from 'react'
import { Dayjs } from 'dayjs';
export interface SearchBarProps {
    id: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
    error?: boolean;
}


export interface IconButtonProps {
    icon: any;
    name: string;
    onClick: () => void;
}

export interface NormalButtonProps {
    name: string;
    onClick?: () => void;
    bgcolor: string;
    textcolor: string
}

export interface EmailShedulesProps {
    _id?: string;
    title: string;
    description: string;
    subject: string;
    frequency: string;
    repeat?: string;
    time: Dayjs | string;
}

export interface ShedulesTableProps {
    shedules: EmailShedulesProps[] | undefined;
    gettingShedules: any
}

export interface CreateEditSheduleProps {
    mode: 'create' | 'edit';
    setIsPopper: Dispatch<SetStateAction<boolean>>;
    sheduleId?: string;
    gettingShedules: any
}

export interface AddEditSheduleLabelProps {
    htmlFor: string;
    title: string
    className?: string
}

export interface PopoverEditProps {
    gettingShedules: any;
    sheduleId?: string
}

export interface TimePickerUIProps {
    formik: any;
    mode: "create" | "edit";
}