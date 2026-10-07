import React from 'react';
import { PLANET_ART } from './planetArt';
import './PlutoBackdrop.css';

/**
 * Decorative ASCII Pluto over the central viewer.
 *
 * It sits above the editors rather than behind them: Lexical, Monaco and the
 * PDF viewer each paint an opaque --nim-bg surface, so a layer underneath
 * would never show. A click-through, low-opacity layer blended with `screen`
 * reads as a transparent background on the black Purple Matrix canvas.
 * Visible only under the Purple Matrix theme (see PlutoBackdrop.css).
 */
export const PlutoBackdrop: React.FC = () => (
  <div className="pluto-backdrop" aria-hidden="true">
    <pre className="pluto-backdrop-art">{PLANET_ART}</pre>
  </div>
);
