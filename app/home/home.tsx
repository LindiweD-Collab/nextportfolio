import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    const encodedMessage = Object.keys(message)
      .map((key) => `${key}=${encodeURIComponent(message[key])}`)
      .join("&");
    const mailToUrl = `mailto:lindiwethaby@hotmail.com?subject=Contact&body=${encodedMessage}`;
    window.location.href = mailToUrl;
  };

  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/thavby.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={300}
          height={300}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Junior Software Developer</h1>
      <div className="mt-8 text-center">
        <a
          href="/CV_Lindiwe_Dlomo_Full-Stack_Developer.pdf"
          download="Lindiwe-Thabsile-Dlomo-Resume.pdf"
          className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Resume
        </a>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-md">
        <h2 className="mb-4 text-2xl font-medium tracking-tight">Get in Touch</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
