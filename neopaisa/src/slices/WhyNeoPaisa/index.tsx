import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WhyNeoPaisa`.
 */
export type WhyNeoPaisaProps = SliceComponentProps<Content.WhyNeoPaisaSlice>;

/**
 * Component for "WhyNeoPaisa" Slices.
 */
const WhyNeoPaisa = ({ slice }: WhyNeoPaisaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for why_neo_paisa (variation: {slice.variation})
      Slices
    </section>
  );
};

export default WhyNeoPaisa;
