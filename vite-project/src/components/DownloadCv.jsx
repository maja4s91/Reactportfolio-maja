export default function DownloadCv({ className = "" }) {
  return (
    <a className={className} href="./Maja's CV.pdf" download="Maja's CV">
      Download CV
    </a>
  );
}
