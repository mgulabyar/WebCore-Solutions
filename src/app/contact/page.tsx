import ContactClient from "./ContactClient";

export default function ContactPage() {
  const officeInfo = [
    { label: "Email", value: "mubeen.dev356@gmail.com" },
    { label: "Phone", value: "+92 346 8016921" },
    { label: "Location", value: "Faisalabad, Pakistan" },
  ];

  const services = [
    "Website Development",
    "Web Apps",
    "Office Add-ins",
    "Google Add-ons",
    "UI/UX Design",
    "API Integrations",
  ];

  return <ContactClient officeInfo={officeInfo} services={services} />;
}