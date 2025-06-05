import { useEffect, useState } from "react";
import "./ScrollToTopButton.css"; // Ensure you have this CSS file for styling

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`scroll-to-top-btn${visible ? " show" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}