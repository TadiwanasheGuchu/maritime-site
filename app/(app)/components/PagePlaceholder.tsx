export default function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
          {title}
        </h1>
        <p className="text-sm text-on-surface-variant mt-1">{description}</p>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-16 text-center">
        <p className="text-xl font-semibold text-on-surface-variant">
          Coming soon
        </p>
        <p className="text-sm text-on-surface-variant/70 mt-2">
          This module is scaffolded and ready to build out.
        </p>
      </div>
    </div>
  );
}
