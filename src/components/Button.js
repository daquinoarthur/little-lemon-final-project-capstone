import "./Button.css";

export function Button({ children, className, secondary, noBg }) {
  return (
    <button
      className={`button ${secondary ? "secondary" : "primary"} ${
        noBg && "no-bg"
      } ${className}`}
    >
      {children}
    </button>
  );
}
