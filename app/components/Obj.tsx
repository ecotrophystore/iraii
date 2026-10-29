import type { CSSProperties } from 'react';
import type { Shape } from '~/lib/catalog';

/**
 * Placeholder artwork. IRAI photography replaces this once shot; until then each
 * piece is drawn as a simple shape in its material and finish colours.
 */
export function Obj({
  shape,
  o1,
  o2,
  style,
}: {
  shape: Shape;
  o1: string;
  o2: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`obj obj--${shape}`}
      style={{ ['--o1' as string]: o1, ['--o2' as string]: o2, ...style } as CSSProperties}
      aria-hidden="true"
    />
  );
}
