import { useEffect } from "react";
const useOutsideClick = (refs, onClose) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        Array.isArray(refs) &&
        refs.some((ref) => ref.current && ref.current.contains(event.target))
      ) {
        return;
      }
      onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, onClose]);
};

export default useOutsideClick;
