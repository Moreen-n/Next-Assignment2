import {
  useEffect,
  useState,
} from 'react';

export default function RaceCar() {
  const [carPosition, setCarPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setCarPosition((prevPosition) => prevPosition - 5);
      } else if (e.key === "ArrowRight") {
        setCarPosition((prevPosition) => prevPosition + 5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount.

  return (
    <>
    <div>
      <h1>Race</h1>
      <p>Move car to the right by pressing the right arrow</p>
      <p id='car' style={{ marginLeft: carPosition + "px" }}>
        🏎
      </p>
    
    </div>
    <hr />
    </>
  );
}
