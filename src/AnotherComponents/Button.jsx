export default function Button({children = 'text'}) {
    return (
        <>
            <button className="pt-[4.7px] pb-[4.7px] pl-[10.7px] pr-[10.7px]  flex justify-center items-center text-white bg-[#4CAF4F] rounded-[1.3px] text-[16px] cursor-pointer">{children}</button>
        </>
    )
}