import z, { number } from "zod";

export const resgisterschema=z.object({
    name:z.string().min(3,"Name must be minimum of three characters"),
    email:z.string().email("enter a valid mail id"),
    mb:z.coerce.number().min(10,"Invalid phone number"),
    shopname:z.string().min(3,"Shop Name must be atleast of 3 characters"),  
    shopCategory: z.string().min(1, "Please select your shop category"),
    password:z.string().min(3,"password must be minimum of 3 character"),
    confirmpassword:z.string()
   

})
