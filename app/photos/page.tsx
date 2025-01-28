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
        I am currently pursuing a 3-year degree program at the International University of Applied Sciences. <br />
        Prior to my degree program, I completed a boot camp with Umuzi, where I gained hands-on experience in software development.
      </p>
      <ImageGrid
        columns={2}
        images={[
          {
            src: "/education/iumas-logo.png",
            alt: "International Universityiversity of Applied Sciences",
          },
          {
            src: "/education/umuzi-logo.png",
            alt: "Umuzi",
          },
        ]}
      />
      <h1 className="mt-12 mb-8 text-2xl font-medium tracking-tight">Certifications</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/certification/Tataa.pdf",
            alt: "Tataa Certification",
          },
          {
            src: "/certification/accenture1.pdf",
            alt: "Accenture Certification",
          },
          {
            src: "/certification/intjava.jpg",
            alt: "Java Certification",
          },
          {
            src: "/certification/pwcc.pdf",
            alt: "PWC Certification",
          },
          {
            src: "/certification/standardbank.pdf",
            alt: "Standard Bank Certification",
          },
        ]}
      />
    </section>
  );
}
