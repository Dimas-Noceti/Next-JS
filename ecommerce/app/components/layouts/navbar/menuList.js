import ButtonLink from "../../common/buttonLink";

const MenuList = ({open, handleClose}) => {
    return (
        <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-white bg-opacity-50`}>

            <aside className={`${open ? 'translate-x-48' : ''} transition-all duration-300 ease-in-out bg-gray-500`}>
                <div onClick={(e) => {
                    handleClose()
                    e.stopPropagation();
                }} className="text-white text-4xl font-bold p-4">
                    x
                </div>
                <nav>
                    <ButtonLink href="/">Home</ButtonLink>
                    <ButtonLink href="/productos">Productos</ButtonLink>
                    <ButtonLink href="/about">About us</ButtonLink>
                    <ButtonLink href="/contacto">Contact</ButtonLink>
                </nav>
            </aside>
        </div>
    )
}

export default MenuList;