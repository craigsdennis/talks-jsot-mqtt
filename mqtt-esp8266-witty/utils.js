'use strict';


export function hexToRgb(hex) {
  // No RegEx in Espruino yet...
  let R, G, B;
  if (hex.length == 3) {
    R = hex.substring(0, 1);
    R = R + R;
    G = hex.substring(1, 2);
    G = G + G;
    B = hex.substring(2, 3);
    B = B + B;
  } else {
    R = hex.substring(0, 2);
    G = hex.substring(2, 4);
    B = hex.substring(4, 6);
  }

  return {
    R: parseInt(R, 16),
    G: parseInt(G, 16),
    B: parseInt(B, 16)
   };
}
