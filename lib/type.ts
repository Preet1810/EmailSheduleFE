export interface SearchBarProps {
    id: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
}

export interface IconButtonProps {
    icon: any;
    name: string;
    onClick: () => void;
}

export interface EmailShedulesProps {
    _id: string
    title: string;
    description: string;
    subject: string;
    frequency: string;
    repeat: string;
    time: string;
}

export interface ShedulesTableProps {
    shedules: EmailShedulesProps[]
}