export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="max-w-3xl mx-auto px-gutter py-margin-desktop flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="font-headline-lg text-on-surface">{title}</h1>
        <p className="font-label-md uppercase tracking-widest text-on-surface-variant">
          Last updated: {lastUpdated}
        </p>
        <p className="font-body-md text-error">
          Template content — review and replace with policy approved by legal
          counsel before publishing.
        </p>
      </header>
      <div className="flex flex-col gap-4 font-body-md text-on-surface-variant [&_h2]:font-headline-md [&_h2]:text-on-surface [&_h2]:mt-6 [&_a]:text-primary [&_a]:underline">
        {children}
      </div>
    </article>
  );
}
