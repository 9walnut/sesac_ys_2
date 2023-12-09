import useToggle from "../hooks/useToggle";

export default function CustomHookEx() {
  const [isPopup, togglePopup] = useToggle(false);

  return (
    <>
      <h3>Custom Hook 공부</h3>
      {isPopup && <div>보여라!</div>}
      <button onClick={togglePopup}>토글</button>

      <input></input>
      <input></input>
    </>
  );
}
