import "./Button.css";

export function Button({ children, className, secondary }) {
  return (
    <button
      className={`button ${secondary ? "secondary" : "primary"} ${className}`}
    >
      {children}
    </button>
  );
}
