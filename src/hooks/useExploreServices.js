import { useLocation, useNavigate } from "react-router-dom";

function useExploreServices() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToServices = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("services");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/#services");
    }
  };

  return goToServices;
}

export default useExploreServices;