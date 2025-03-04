import z from "zod"

interface InputProps{
    email:string,
    password:string
}

export function ValidateInput(obj:InputProps){
    const Input = z.object({
        email:z.string().email(),
        password:z.string().min(8)
    })

    const response = Input.safeParse(obj)
    return response
}
