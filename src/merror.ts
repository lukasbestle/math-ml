import { MathMLElement, html, TemplateResult, element } from './mathml-element.js';

@element('math-error')
export class MathErrorElement extends MathMLElement {
  render(): TemplateResult {
    return html`
    <style>
      :host {
        display: inline-block;
        background: rgb(255, 255, 221);
        border: 1px solid red;
        font-weight: bold;
        font-family: sans-serif;
        font-size: 1.1em;
        color: var(--math-color, inherit);
        background: var(--math-background, inherit);
      }
    </style>
    <slot></slot>
    `;
  }
}