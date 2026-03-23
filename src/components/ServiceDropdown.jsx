function ServiceDropdown() {
  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO Services",
    "Cloud Solutions",
    "AI Solutions"
  ];

  return (
    <div className="absolute top-8 bg-black border border-yellow-500 p-4 rounded shadow-lg">
      {services.map((s, i) => (
        <p key={i} className="hover:text-yellow-400 cursor-pointer">
          {s}
        </p>
      ))}
    </div>
  );
}

export default ServiceDropdown;