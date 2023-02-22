import { HighlightOnHover } from "./HighlightOnHover";
const Contact = ()=>{
    return (
        <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">
                Get in touch
            </h2>
        <p className="text-gray-700 lg:text-lg">
        Do you have a job opportunity or idea you&apos;d like to discuss? Feel free
        to reach me at{" "}
        </p>
        <a href="mailto:ayushkumar3936@gmail.com" className="font-medium">
        ayushkumar3936@gmail.com
          </a>
        <HighlightOnHover>
            </HighlightOnHover>,{" "}
            <HighlightOnHover>
                <a 
                href="https://github.com/aklite"
                target="_blank"
                className="font-medium"
                rel="noreferrer"
                >
                    Github 
                </a>
            </HighlightOnHover>{" "}
            and{" "}
            <HighlightOnHover>
                <a 
                href="https://www.linkedin.com/in/ayushwritescode/"
                target="_blank"
                className="font-medium"
                rel="noreferrer">
                    Linkedin 
                </a>
            </HighlightOnHover>
            . 
        </div>
    )
}
export default Contact