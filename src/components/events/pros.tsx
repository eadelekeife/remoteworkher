interface EventPropsInterface {
    bg: string
    textColor: string
    main: string
    icon: string
    footnote: string
}

const EventPros = (props: EventPropsInterface) => {
    return (
        <div className={`border border-solid border-black text-center py-14 rounded-2xl px-10 ${props.bg}`}>
            <div className="flex items-end mb-2 justify-center">
                <h3 className={`text-4xl ${props.textColor}`}>{props.main}</h3>
                <span className={`text-4xl ${props.textColor}`}>{props.icon}</span>
            </div>
            <p className={`${props.textColor} text-lg`}>{props.footnote}</p>
        </div>
    )
}

export default EventPros;