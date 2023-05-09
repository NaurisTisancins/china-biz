type Props = {
  text: string;
};

function CallToActionButton({ text }: Props) {
  return (
    <div className="call-to-action-btn bg-cyan-600 text-white font-semibold rounded hover:bg-amber-300">
      {text}
    </div>
  );
}

export default CallToActionButton;
