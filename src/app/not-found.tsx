import { Button } from "@/components/ui/Button";
import { Sheen } from "@/components/ui/Sheen";

export default function NotFound() {
  return (
    <section className="px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="stage surface-blue">
        <Sheen />
        <div className="container-x flex min-h-[70vh] flex-col items-start justify-end pb-16 pt-36">
          <p className="text-eyebrow font-semibold text-white/80">Page in preparation</p>
          <h1 className="mt-4 max-w-[18ch] font-display text-h2 font-bold text-white">
            This part of the platform is being finalised.
          </h1>
          <p className="mt-4 max-w-[52ch] text-white/85">
            Return to the overview or speak with our team about technical scoping for your development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" variant="light">
              Back to overview
            </Button>
            <Button href="mailto:sales@manzili.sa" variant="outline" plain leadingIcon="mail">
              sales@manzili.sa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
