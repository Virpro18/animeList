interface props {
    title: string
}

const HeaderMenu = ({ title }: props) => {
    return (
        <>
            <div className="p-8">
                <h3 className="text-center text-2xl text-color-primary">{title}</h3>
            </div>
        </>
    )
}

export default HeaderMenu;