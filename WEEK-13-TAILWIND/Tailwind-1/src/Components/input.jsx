export const Input=({
    disabled,
    children,
    onClick,
    type,
    placeholder

})=>{
    return (
        //clsx,cx
        <span onClick={onClick} className={`m-4 rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer bg-[#19406a]}`}>
            <input type={type} placeholder={placeholder} className="bg-[#19406a] outline-none rounded-xl p-4" />
        </span>
    )

}