interface HeadingProps {
    styleClass?: string;
    text: string;
    classDesign?: string;
}

const Heading: React.FC<HeadingProps> = ({ styleClass, text,classDesign }) => {
    return (
        <h2 className={`${styleClass} relative z-10 lg:text-5xl text-4xl lg:leading-custom-10xl font-black bg-gradient-to-t to-deep-blue via-purple from-orange bg-clip-text text-transparent sm:tracking-[6px] translate-[2px] max-sm:max-w-[243px] top-0 -translate-x-0.5`}>
            {text}
            <span className={`${classDesign} absolute inset-0 text-white font-black text-transparent sm:tracking-[6px] translate-[2px] top-0 translate-x-[1px] translate-y-[1px]`}>
                {text}
            </span>
        </h2>
    );
};

export default Heading;