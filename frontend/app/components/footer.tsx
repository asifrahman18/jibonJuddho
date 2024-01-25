import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex items-center justify-between gap-4 md:h-11 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm  leading-loose text-muted-foreground md:text-left">
            Developed By{" "}
            <a
              href={""}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              JibonJuddho
            </a>{" "}
            © 2024
          </p>
        </div>
        <div className="flex flex-col space-x-0 space-y-4 text-muted-foreground sm:flex-row sm:space-x-4 sm:space-y-0 md:text-left">
          <Link
            href=""
            className="font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Privacy
          </Link>

          <Link
            href=""
            className="font-medium underline-offset-4 hover:underline"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;