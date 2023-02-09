import { useHover } from "@react-aria/interactions"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Tilt from "react-parallax-tilt"
import { RoughNotation } from "react-rough-notation"
import {darkColors} from "@/ui/brandColors"
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants"
const data = [
    {
        name: "Dough",
        description: "A personal budgeting app that makes it easier to manage my finances in one place by pulling data from my bank account using TrueLayer.",
        caseStudy: "/dough",
        url: "#",
        image: "/dough.png",
    },
    {
        name: "Contra",
        description:
            "An iOS app that allows users to create custom pomodoro timers and sessions. It connects to Google Calendar so users can see an overview of their day.",
        caseStudy: "/contra",
        url: "#",
        image: "/contra.jpeg",
    },
    {
        name: "Bella Pilates",
        description:
            "A pilates platform offering beginner to advanced programs and nutritional plans for Portuguese-speaking audiences.",
        caseStudy: "/bella-pilates",
        url: "#",
        image: "/bella-julia.png",
    }, {
        name: "Twitter for Dopaholics",
        description:
            "A browser extension that hides all feel good features for those of us who can't handle the kick. Like Adblocker, but for that sweet brain juice.",
        caseStudy: "/twitter-dopaholics",
        url: "#",
        image: "/twitter.png",
    },
]
type Project = {
    name: string
    description: string
    caseStudy: string
    url: string
    image: string
}
const Project = ({ 
    project, 
    color,
    index 
   }:
    {
        project: Project,
        color: string,
        index: number
    }) => {
    let { hoverProps, isHovered } = useHover({})
    return (
        <Link href="/oops" legacyBehavior>
            <a className={clsx("block rounded-xl",FOCUS_VISIBLE_OUTLINE)}>
                <div {...hoverProps}>
                    <Tilt
                        transitionSpeed={10000}
                        tiltMaxAngleY={8}
                        tiltMaxAngleX={8}
                        scale={1.01}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        glareBorderRadius="11px"
                    >
                        <Image
                            src={project.image}
                            alt="Project Preview"
                            width={500}
                            height={300}
                            priority={true}
                            className="rounded-xl"
                        />
                    </Tilt>
                    <p className="mt-4 text-xl font-bold text-gray-800">
                        {project.name}{" "}
                        <span className="text-base font-normal text-gray-500">
                            &middot; Under development
                        </span>
                    </p>{" "}
                </div>
            </a>
        </Link>
    )
}

const Projects = () => {
    return (
        <div className="container px-6 py-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            <h4 className="text-gray-700 lg:text-lg">
                Some of the side projects I have been working on in the last few months.
            </h4>
            <div className="-mt-2 lg:flex lg:flex-wrap lg:-mx-6">
                {data.map((project, index) => {
                    return (
                        <div key={index} className="mt-12 lg:w-1/2 lg:px-6">
                            <Project project={project} color={darkColors[index]} index={index} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects