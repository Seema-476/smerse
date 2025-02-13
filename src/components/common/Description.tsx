interface CustomDescriptionProps {
    styleClass?: string;
    description: string;
}

const CustomDescription: React.FC<CustomDescriptionProps> = ({ styleClass = "", description }) => {
    return (
        <p className={`${styleClass} lg:text-base text-sm text-white font-normal tracking-[0.9px]`}>
            {description}
        </p>
    );
};

export default CustomDescription;