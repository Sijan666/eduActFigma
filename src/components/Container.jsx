

const Container = ({children , className}) => {
    return (
        <div className={`lg:max-w-330 mx-auto ${className}`}>{children}</div>
    )
}

export default Container