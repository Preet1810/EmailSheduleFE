export interface SearchBarProps {
    id: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
}