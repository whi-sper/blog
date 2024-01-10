export default function Layout(props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
        {props.children}
        {props.analytics}
        {props.team}
    </div>
  );
}
