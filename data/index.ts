import { identity } from "@tsparticles/engine";
import { link } from "fs";
import { desc, th } from "motion/react-client";
import { title } from "process";

export const workExperience = [
    {
        id:1,
        title: "Frontend Developer",
        description: "I am a frontend developer with 2 years of experience in building web applications using React, Next.js, and Tailwind CSS.",
        className: "md:cols-span-2",
        thumbnail:"01.svg"
    },
    {
        id:2,
        title:"It manager",
        description:"I am an IT manager with 5 years of experience in managing IT infrastructure and software development teams.",
        className: "md:cols-span-2",
        thumbnail:"02.svg"
    },{
        id:3,
        title:"data scientist", 
        description:"I am a data scientist with 3 years of experience in analyzing data and building machine learning models.",
        className: "md:cols-span-2",
        thumbnail:"03.svg"
    },
    {
        id:4,
        title:"UX designer",
        description:"I am a UX designer with 4 years of experience in designing user interfaces and user experiences for web applications.",
        className: "md:cols-span-2",
        thumbnail:"04.svg"

    },{
        id:5,
        title:"Software Engineer",
        description:"I am a software engineer with 6 years of experience in building web applications using React, Node.js, and MongoDB.",
        className: "md:cols-span-2",
        thumbnail:"05.svg"
    },{
        id:6,
        title:"Product Manager",
        description:"I am a product manager with 4 years of experience in managing product development teams and building web applications.",
        className: "md:cols-span-2",
        thumbnail:"06.svg"
    }
]


export const navItems = [
    {
        name:"Home", link:"#home"
    },

    {
        name:"Experience",link:"#experience"
    },
    {
        name:"Projects", link:"#projects"
    },
    {
        name:"Approach", link:"#approach"
    },
    {
        name:"Gallery", link:"#gallery"
    },
]

export const projects= [
    {
        id:1,
        title:"3D Solar system planets to explore",
        des:"Explore the solar system in 3D with this interactive web application using three js.",
        img:"/project-1.jpg",
        link:"/ui.www.com"
    },
    {
        id:2,
        title:"Yoom - Video conferencing app",
        des: "Simplify your video conferencing experience with Yoom, a web application built using React and WebRTC.",
        img:"/project-2.jpg",
        link:"/ui.www.com"
    },
    {
        id:3,
        title:"AI Image SaaS - Canva Application",
        des:"A real software as a service application that uses AI to generate images for social media posts.",
        img:"/project-3.jpg",
        link:"/ui.www.com"
    },
     {
        id:4,
        title:"Animated Apple Iphone 3d Website",
        des:"Recreated the Apple website using 3D animations and WebGL.",
        img:"/project-4.jpg",
        link:"/ui.www.com"
    },
]


export const testimonials = [
    {
        quote:"Especially has increasingly been useful in distributing testimonials o products or place, it is done by making use of taggin feature the directly links to the original brand or the particular location that the picture was taken",
        name:"Ana",
        title:"MoMo"

    },

    {
        quote:"Especially has increasingly been useful in distributing testimonials o products or place, it is done by making use of taggin feature the directly links to the original brand or the particular location that the picture was taken",
        name:"Smith kerf",
        title:"General"

    },


    {
        quote:"Especially has increasingly been useful in distributing testimonials o products or place, it is done by making use of taggin feature the directly links to the original brand or the particular location that the picture was taken",
        name:"Jacob",
        title:"Dev"

    },

    {
        quote:"Especially has increasingly been useful in distributing testimonials o products or place, it is done by making use of taggin feature the directly links to the original brand or the particular location that the picture was taken",
        name:"Elizabeth",
        title:"Ops"

    },

    {
        quote:"Especially has increasingly been useful in distributing testimonials o products or place, it is done by making use of taggin feature the directly links to the original brand or the particular location that the picture was taken",
        name:"Santiago",
        title:"Mna"

    },
]

export const socialIcons=[
    {
        id:1,
        img:"/git.svg",

    },
    {
        id:2,
        img:"/twit.svg",

    },
    {
        id:3,
        img:"/link.svg",

    },
]


















