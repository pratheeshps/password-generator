import { useEffect, useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
export default function PassGenBlock({ generatedPassword }) {
  const [notification, setNotification] = useState(false);
  const inputRef = useRef();
  let timeOutRef = useRef();

  const handleClick = () => {
    if (!generatedPassword) return;
    // Select the text field
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(inputRef.current.value);
    setNotification(true);
    timeOutRef = setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeOutRef);
    };
  }, []);

  return (
    <div className="passblock">
      <div className="passblock__string">{generatedPassword}</div>
      <input
        ref={inputRef}
        type="text"
        className="hidden"
        value={generatedPassword}
      />
      <div
        className="passblock__icon pointer"
        onClick={handleClick}
        title="Copy"
      >
        <FaRegCopy />
      </div>
      {notification && <div className="notification">Copied</div>}
    </div>
  );
}
