import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "About Me",
  description: "My Education and Certifications",
};

export default function AboutMe() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Education</h1>
      <p>
        I am currently pursuing a 3-year degree program at the International University of Applied Sciences.
      </p>
      <ImageGrid columns={2} images={[{ src: "/education/iumas-logo.png", alt: "International University of Applied Sciences" }]} />
      <p>
        Prior to my degree program, I completed a boot camp with Umuzi, where I gained hands-on experience in software development.
      </p>
      <ImageGrid columns={2} images={[{ src: "/education/umuzi-logo.png", alt: "Umuzi" }]} />
      <h1 className="mt-12 mb-8 text-2xl font-medium tracking-tight">Certifications</h1>
      <p>
        I have obtained various certifications in the field of software development and technology.
      </p>
      <ImageGrid
        columns={3}
        images={[
          { src: "/certifications/Tataa.pdf", alt: "Tataa Certification" },
          { src: "/certifications/accenture1.pdf", alt: "Accenture Certification" },
          { src: "/certifications/intjava.jpg", alt: "Java Certification" },
          { src: "/certifications/pwcc.pdf", alt: "PWC Certification" },
          { src: "/certifications/standardbank.pdf", alt: "Standard Bank Certification" },
        ]}
      />
    </section>
  );
}
