import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ServiceCardProps = {
  icon: LucideIcon;
  index: string;
  title: string;
  description: string;
  href?: string;
};

const ServiceCard = ({ icon: Icon, index, title, description, href = "/services" }: ServiceCardProps) => (
  <Link
    to={href}
    className="group block h-full focus-visible:outline-none"
    aria-label={`${title} ansehen`}
  >
    <article className="service-card relative flex h-full min-h-64 flex-col overflow-hidden border border-border/85 bg-card/95 p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="flex items-start justify-between gap-5">
        <div className="service-card__icon flex h-12 w-12 shrink-0 items-center justify-center border border-primary/25 bg-primary/10 text-primary transition-transform duration-300">
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <span className="font-display text-xs font-semibold tracking-[0.08em] text-muted-foreground">{index}</span>
      </div>
      <h3 className="mt-8 font-display text-xl font-semibold leading-7 text-foreground">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-primary">
        Mehr erfahren
        <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </article>
  </Link>
);

export default ServiceCard;