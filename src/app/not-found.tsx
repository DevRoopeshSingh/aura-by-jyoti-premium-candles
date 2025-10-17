import Link from "next/link";

const NotFound = () => (
  <div className="flex min-h-[60vh] items-center justify-center bg-muted/20">
    <div className="text-center">
      <h1 className="font-playfair text-5xl font-bold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        We couldn&apos;t find the glow you were looking for.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-smooth hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  </div>
);

export default NotFound;

