function Services() {
  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO",
    "Cloud",
    "AI"
  ];

  return (
    <div className="py-20 px-6">
      {services.map((s, i) => (
        <div key={i} className="mb-16">
          <h2 className="text-3xl text-yellow-500">{s}</h2>
          <p className="text-gray-400 mt-2">
            This is a description of {s}. You can customize later.
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Services;