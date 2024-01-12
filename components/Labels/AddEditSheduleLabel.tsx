import { AddEditSheduleLabelProps } from '@/lib/type'

const AddEditSheduleLabel = (props: AddEditSheduleLabelProps) => {
    const { title, htmlFor, className } = props;
    return (
        <label className={`text-black text-[13px] font-[500] min-w-[72px] ${className}`} htmlFor={htmlFor}>{title}</label>
    )
}

export default AddEditSheduleLabel