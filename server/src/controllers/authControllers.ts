
import { ValidateInput } from "../inputValidation/zod"
import bcrypt from "bcryptjs"
import { User } from "../models/user"
import jwt from "jsonwebtoken"
const JWT_SECRET = process.env.JWT || "123456789"

const test = async (req: any, res: any) => {
    res.send('hello gaurav')
}


const SignupUser = async (req: any, res: any) => {
    try {

        const body = req.body

        const { success } = ValidateInput(body)

        if (body.password.length < 8) {
            return res.status(400).json({
                message: "Password should be atleast 8 characters long"
            })
        }

        if (!success) {
            return res.status(400).json({
                message: "Invalid input"
            })
        }


        const existingUser = await User.findOne({
            email: body.email
        })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(body.password, 10)


        const user = await User.create({
            email: body.email,
            password: hashedPassword
        })

        const token = await jwt.sign({ id: user._id }, JWT_SECRET)

        res.cookie("token", token)

        return res.status(200).json({
            message: "User created successfully"
        })


    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

const SigninUser = async (req: any, res: any) => {
    try {

        const body = req.body
        const { success } = ValidateInput(body)

        if (!success) {
            return res.status(400).json({
                message: "Invalid input"
            })
        }

        const user = await User.findOne({
            email: body.email
        })

        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            })
        }

        const matchPassword = await bcrypt.compare(body.password, user.password)

        if (!matchPassword) {
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        const token = await jwt.sign({ id: user._id }, JWT_SECRET)

        res.cookie("token", token)

        return res.status(200).json({
            message: "User signed in successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

    const UpdateUser = async (req: any, res: any) => {
        try{
            const body = req.body

            const { success } = ValidateInput(body)

            if(body.password.length < 8){
                return res.status(400).json({
                    message:"Password should be atleast 8 characters long"
                })
            }

            if(!success){
                return res.status(400).json({
                    message:"Invalid input"
                })
            }

            const user = await User.findOne({
                email:body.email
            })

            if(!user){
                return res.status(400).json({
                    message:"User does not exist"
                })
            }

            const hashedPassword = await bcrypt.hash(body.password,10)

            const updatedUser = await User.updateOne({ 
                email:body.email
            },{
                password:hashedPassword
            })

            return res.status(200).json({
                message:"Password updated successfully"
            })

        }catch(err){    
            return res.status(500).json({
                message:"Internal server error"
            })
    }
}

    module.exports = {
        test,
        SignupUser,
        SigninUser,
        UpdateUser
    }
