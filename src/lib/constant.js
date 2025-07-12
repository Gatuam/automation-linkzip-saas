import { Grid, HomeIcon, Settings, Trash, User2Icon } from "lucide-react";

export const data ={
    user:{
        name: "Shadcn",
        email : 'sggtmm@gmail.com',
        avatar: User2Icon,
    },
    navMain: [
        {
            title : 'Home',
            url: '/dashboard',
            icon : HomeIcon
        },
        {
            title : 'Template',
            url: '/template',
            icon : Grid
        },
        {
            title : 'Trash',
            url: '/trash',
            icon : Trash
        },
        {
            title : 'Setting',
            url: '/setting',
            icon : Settings
        }
    ]
}