import { tv } from 'tailwind-variants'
export const input = tv({
    slots: {
        base: 'flex flex-col gap-2 justify-center text-base',
        labelText: 'text-light-400',
        inputwa:
            '!rounded-lg  font-roboto !text-light-200 !px-[20px] !py-3 item placeholder:!text-light-500 placeholder:!font-roboto ',
    },
})
