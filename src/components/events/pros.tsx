interface EventPropsInterface {
    bg: string
    borderColor: string
    textColor: string
    main: string
    icon: string
    footnote: string
}

const EventPros = (props: EventPropsInterface) => {
    return (
        <div className={`border-2 border-solid ${props.borderColor} text-center py-10 md:py-14 rounded-2xl px-10 ${props.bg}`}>
            <div className="flex items-end mb-3 md:mb-2 justify-center">
                <h3 className={`text-3xl md:text-4xl font-jakarta font-bold ${props.textColor}`}>{props.main}</h3>
                <span className={`text-3xl md:text-4xl font-bold ${props.textColor}`}>{props.icon}</span>
            </div>
            <p className={`${props.textColor} text-base md:text-lg`}>{props.footnote}</p>
        </div>
    )
}

export default EventPros;