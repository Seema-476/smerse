interface CustomButtonProps {
    CustomOnClick?: () => void;
    title: string;
    styleClass?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ CustomOnClick, title, styleClass }) => {
    return (
        <button
            onClick={CustomOnClick}
            className={`${styleClass} tracking-[1px] relative lg:px-6 lg:py-[9px] py-2 px-4 text-white font-extrabold lg:text-xl text-base leading-6 rounded-lg shadow-custom-xl bg-gradient-to-b from-deep-blue via -purple to-orange hover:scale-105 duration-500
`}>
            {title}
        </button >
    );
};

export default CustomButton;