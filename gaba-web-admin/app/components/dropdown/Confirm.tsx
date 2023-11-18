import React from 'react'

export default function Confirm({ text, show, handleConfirm, title = 'confirm' }: {
    text: string,
    show: Boolean;
    handleConfirm: Function;
    title?: string;
}) {
    return (
        <>
            {show && <div className="absolute right-0 top-8 bg-black/50 flex flex-col w-52 gap-2 rounded-md border border-white">
                <div className="w-full flex items-end justify-end   ">
                    <button
                        onClick={(e) => {
                            handleConfirm();
                        }}
                        className="pr-2"
                    >
                        x
                    </button>
                </div>
                <div className="h-full text-center flex flex-col items-center gap-2 justify-center  w-full ">
                    <p className="text-sm">{text}</p>

                    <button
                        onClick={(e) => {
                            handleConfirm(e);
                        }}
                        className="mb-2 roudend-md px-2 text-center  hover:bg-white hover:text-black "
                    >
                        {title}
                    </button>
                </div>
            </div>}</>
    )
}
