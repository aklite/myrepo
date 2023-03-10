import { lightColors } from "@/ui/brandColors"
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants"
import { RainbowHighlight } from "@/ui/RainbowHighlight"
import { shuffleArray } from "@/ui/shuffleArray"
import { useIsFontReady } from "@/ui/useIsFontReady"
import clsx from "clsx"
import Image from "next/image"
import React from "react"
import Tilt from "react-parallax-tilt"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const About = () => {
  // before animation, detect if custom fonts are loaded, so <RoughNotation />
  // SVG's are correctly positioned over the elements
  const isFontReady = useIsFontReady()

  const [colors, setColors] = React.useState<string[]>([])

  // shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  React.useEffect(() => {
    setColors(shuffleArray(lightColors))
  }, [])

  return (
    <div className="container px-4 mx-auto text-amber-200">
      <div className="lg:flex lg:flex-wrap lg:-mx-4">
        <div className="lg:w-2/3 lg:px-4">
          <RoughNotationGroup show={isFontReady}>
            <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
              Hello! I&apos;m Ayush, a{" "}
              <RainbowHighlight color={colors[0]}>developer</RainbowHighlight>{" "}
              based in India.
            </h1>

            <div className="mt-4 text-gray-700">
              <p>
                I love building tools that are{" "}
                <RainbowHighlight color={colors[1]}>
                  user-friendly, simple
                </RainbowHighlight>{" "}
                and{" "}
                <RainbowHighlight color={colors[2]}>
                  delightful
                </RainbowHighlight>
                .
              </p>

              <p>
                I am a student at LPU where I spent 4 years learning
                the fundamentals of{" "}
                <RainbowHighlight color={colors[3]}>front-end</RainbowHighlight>{" "}
                and{" "}
                <RainbowHighlight color={colors[4]}>
                  back-end web development
                </RainbowHighlight>
                .
              </p>

              <p>
                <RoughNotation
                  type="strike-through"
                  multiline={true}
                  padding={[0, 2]}
                  iterations={1}
                  color="#374151"
                  animationDuration={1200}
                  strokeWidth={1.2}
                >
                  I currently work at Amazon where my role is split between
                  helping scale processes through automations and overseeing
                  student teams.
                </RoughNotation>
              </p>
              <p>
                Through these experiences, I had the opportunity to work with
                both small and large, specialised and cross-functional teams
                across different time zones and developed a working style that
                leans towards{" "}
                <RainbowHighlight color={colors[5]}>
                  flexibility,
                </RainbowHighlight>
                <RainbowHighlight color={colors[6]}>clarity,</RainbowHighlight>{" "}
                and{" "}
                <RainbowHighlight color={colors[0]}>
                  collaboration
                </RainbowHighlight>
                .
              </p>

              <p>
                I&apos;m currently looking for a new role as a developer.{" "}
                <RoughNotation
                  type="circle"
                  multiline={true}
                  animationDuration={1500}
                  animationDelay={1700}
                  strokeWidth={2}
                  iterations={3}
                  padding={5}
                  color={colors[1]}
                >
                  <a
                    href="#contact"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                  >
                    Hire me?
                  </a>
                </RoughNotation>
              </p>
            </div>
          </RoughNotationGroup>

          <div>
            <div className="flex flex-wrap mt-6 space-x-4">
              <a
                href="/ayush-resume.pdf"
                target="_blank"
                className={clsx(
                  "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-700 border border-transparent rounded-full shadow-sm hover:bg-gray-800",
                  FOCUS_VISIBLE_OUTLINE,
                )}
              >
                View Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/aklite/"
                target="_blank"
                rel="noreferrer"
                className={clsx(
                  "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-700 border border-transparent rounded-full shadow-sm hover:bg-gray-800",
                  FOCUS_VISIBLE_OUTLINE,
                )}
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm mt-12 lg:w-1/3 lg:px-4 lg:mt-0">
          <Tilt
            transitionSpeed={15000}
            tiltMaxAngleY={7}
            tiltMaxAngleX={7}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareBorderRadius="11px"
            tiltReverse={true}
            trackOnWindow={true}
          >
            <div className="shadow-2xl rounded-xl">
              <div
                className="shadow-xl rounded-xl"
                // unfortunate hack to remove the weird whitespace left by
                // next/image wrapper div
                style={{ fontSize: "0" }}
              >
                <Image
                  src="/ayush.jpg"
                  alt="Ayush Kumar photo"
                  width={752}
                  height={1001}
                  priority={true}
                  className="rounded-xl"
                />
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}
export default About