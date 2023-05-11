import Link from 'next/link';

type Props = {
  text: string;
  path: string;
};

function CallToActionButton({ text, path }: Props) {
  return (
    <Link
      className="call-to-action-btn bg-cyan-600 text-white font-semibold rounded hover:bg-amber-300"
      href={path}
    >
      {text}
    </Link>
  );
}

export default CallToActionButton;
