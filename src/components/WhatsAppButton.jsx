import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phoneNumber = "919999999999"; // 👉 replace with your number (with country code, no +)

  const message = "Hi, I need help regarding your services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className=" animate-bounce group-hover:opacity-100 hover:scale-110 fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >

      {/* TEXT */}
      <span className="hidden sm:block text-sm font-medium">
        Need help?
      </span>

      {/* ICON */}
      <FaWhatsapp size={35} />
      
      

    </a>
  );
}

export default WhatsAppButton;