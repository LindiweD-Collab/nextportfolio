import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Certifications",
  description: "My Certifications",
};

export default function Certifications() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Certifications</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/certifications/certif.jpg",
            alt: "AWS Certified Cloud Practitioner",
            href: "https://www.aws.com/certification/certified-developer/",
          },
          {
            src: "/certifications/certification2.jpg",
            alt: "Google Data Analytics Certified Professional",
            href: "https://cloud.google.com/certification/professional-cloud-developer",
          },
          {
            src: "/certifications/certification3.jpg",
            alt: "Microsoft Certified Azure Developer",
            href: "https://www.microsoft.com/en-us/learning/azure-developer.aspx",
          },
          {
            src: "/certifications/certification4.jpg",
            alt: "Project Management Certification",
            href: "https://www.scrum.org/certifications/csm",
          },
          {
            src: "/certifications/certification5.jpg",
            alt: "Certified Agile Practitioner",
            href: "https://www.pmi.org/certifications/agile-practitioner",
          },
          {
            src: "/certifications/certification6.jpg",
            alt: "Certified Information Systems Security Professional",
            href: "https://www.isc2.org/Certifications/CISSP",
          },
        ]}
      />
      <ImageGrid
        columns={2}
        images={[
          {
            src: "/certifications/certification1.jpg",
            alt: "AWS Certified Cloud Practitioner",
          },
          {
            src: "/certifications/certification2.jpg",
            alt: "Google Data Analytics Certified Professional",
          },
          {
            src: "/certifications/certification3.jpg",
            alt: "Project Management Certification",
          },
          {
            src: "/certifications/certification4.jpg",
            alt: "Certified Scrum Master",
          },
        ]}
      />
      <ImageGrid
        columns={4}
        images={[
          {
            src: "/certifications/certification1.jpg",
            alt: "AWS Certified Developer",
          },
          {
            src: "/certifications/certification2.jpg",
            alt: "Google Cloud Certified Professional",
          },
          {
            src: "/certifications/certification3.jpg",
            alt: "Microsoft Certified Azure Developer",
          },
          {
            src: "/certifications/certification4.jpg",
            alt: "Certified Scrum Master",
          },
          {
            src: "/certifications/certification5.jpg",
            alt: "Certified Agile Practitioner",
          },
          {
            src: "/certifications/certification6.jpg",
            alt: "Certified Information Systems Security Professional",
          },
        ]}
      />
    </section>
  );
}
