export const Button=({
    disabled,
    children,
    onClick

})=>{
    return (
        //clsx,cx
        <span onClick={onClick} className={`rounded-xl text-4xl px-32 py-8 mt-2 mb-2 text-white cursor-pointer ${disabled ?"bg-[#19406a]":"bg-[#36c6c0]"}`}>
            {children}
        </span>
    )

}