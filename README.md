# Typography Lab Project

This project is a minimalist experiment in dynamic typography. The same input text can be rendered in two completely different visual systems depending on whether the characters are lowercase or uppercase.

A. Concept
1. Dual-Theme System
   The interface presents two distinct modes that coexist in a single design.

2. Lowercase Mode (“Dark”)
   Futuristic and linear visual style.
   Characters rendered as SVG paths.
   Wireframe-like geometry emphasizing construction and strokes.

3. Uppercase Mode (“Light”)
   Flat, no-curve and industrialization.
   Characters rendered based on Chakra Petch.
   Shapes compressed and stretched with CSS transforms to resemble stencil-like block forms.


B. Technical Implementation
1. Vanilla Web Stack
   The only external resource is the Google Font used for the uppercase mode, ensuring high performance.

2. Theming Engine
   A global transition on the body element interpolates color variables over 0.5 seconds, producing a smooth fade rather than a hard switch.


C.Rendering Strategies
  1. Lowercase: SVG paths generated from a JavaScript object defining each letter’s geometry, providing precise control over stroke width and cap styles.
  2. Uppercase: Web-font-based rendering using Chakra Petch, modified through CSS transforms to achieve the effects.


D. Input and State Logic
  1. Input is sanitized depending on the active mode (forcing lowercase or uppercase).
  2. Characters are rendered in real time by generating either SVG elements or span elements.
  3. Character counting is handled through a simple length check.
