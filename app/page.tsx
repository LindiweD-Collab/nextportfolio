import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/thavby.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Junior Software Developer  
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! I’m Lindiwe Thabsile Dlomo, an innovative  based in Johannesburg, South Africa. I’m passionate about harnessing technology to solve real-world challenges and drive meaningful change.
        </p>
        <p>
          Developer with hands-on experience in Python and Robotic Process Automation (RPA). I thrive on developing efficient solutions and enhancing workflows through automation, always aiming to make processes smarter and more streamline
        </p>
        <p>
          My curiosity and enthusiasm for learning fuel my journey in the tech world. I’m excited to connect with like-minded individuals and contribute to projects that make a difference.
        </p>
      </div>
    </section>
  );
}
