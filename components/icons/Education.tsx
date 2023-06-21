type Props = {
  width?: string;
  height?: string;
  color?: string;
  hover?: boolean;
};

function Education({
  width = '24px',
  height = '16px',
  color,
  hover = false,
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -8 72 72"
      id="Layer_1"
      data-name="Layer 1"
      className="icon-hover"
      // fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <title>user-graduate</title>
      <path
        className=".icon-hover"
        d="M17.25,52h37.5A1.68,1.68,0,0,0,56,51.44a1.39,1.39,0,0,0,.34-1.1A20.65,20.65,0,0,0,45.51,34.73a13.42,13.42,0,0,1-19,0A20.65,20.65,0,0,0,15.63,50.34a1.39,1.39,0,0,0,.34,1.1A1.68,1.68,0,0,0,17.25,52Z"
      />
      <path
        className=".icon-hover"
        d="M45.58,18.55l-.67.32-7.37,3.19a5.29,5.29,0,0,1-3.7,0l-7.3-3.17-.26-.12a11.66,11.66,0,0,0,.64,13.78c.2.25.41.48.63.71s.45.45.68.66a11.62,11.62,0,0,0,15.54,0c.23-.21.46-.43.68-.66s.43-.46.63-.71a11.66,11.66,0,0,0,.5-14Z"
      />
      <path d="M50.8,22.39h2.48l-.89-2.89v-9c.6-.41.43-.91-.45-1.22l-14.13-5A6.41,6.41,0,0,0,34,4.3L19.51,9.77c-1.05.39-1.05,1,0,1.43l5.19,2v1A3.32,3.32,0,0,0,26.54,17l7.3,3.18a5.35,5.35,0,0,0,3.7,0L44.91,17a3.32,3.32,0,0,0,1.85-2.82V13l4.89-2.06v8.64Z" />
    </svg>
  );
}

export default Education;
