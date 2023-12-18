import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="not-foundtext">The page couldn't be found</p>
      <Link to={"/"} className="not-foundbtn">
        Back to home page
      </Link>
    </section>
  );
}
