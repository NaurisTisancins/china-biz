interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function SubmitButton({ text, type }: Props) {
  return (
    <button
      type="submit"
      className="submit-form-button bg-cyan-600 text-white font-semibold rounded hover:bg-amber-400"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
