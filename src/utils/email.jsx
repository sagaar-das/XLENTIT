import emailjs from "emailjs-com";

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (formData) => {
  return emailjs.send(
    emailServiceId,
    emailTemplateId,
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
    },
    emailPublicKey
  );
};