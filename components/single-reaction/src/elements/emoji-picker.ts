import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unicodeEmojiMapping } from "../index";

@customElement("emoji-picker")
export class EmojiPicker extends LitElement {
  @property({ type: Number })
  count = 0;

  @state()
  private emojiList: [string, string][] = Object.entries(unicodeEmojiMapping);

  private _onEmojiSelected(name: string) {
    this.dispatchEvent(
      new CustomEvent("emoji-selected", {
        detail: { name },
        bubbles: true,
        composed: true,
      })
    );
  }

  static styles = css`
    :host {
      position: relative;
    }
    .emoji-grid {
      position: absolute;
      bottom: 0;
      max-width: 264px;
      min-width: 192px;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24px, 1fr));
      gap: 12px;
      padding: 12px;
      border-radius: 4px;
      margin-bottom: 2px;
      border: 1px solid #cccccc;
    }
    .emoji {
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .emoji:hover {
      background-color: #d4eff9;
    }
  `;

  render() {
    return html`
      <div class="emoji-grid">
        ${this.emojiList.map(
          ([name, emoji]) => html`
            <span
              class="emoji"
              title="${name}"
              @click=${() => this._onEmojiSelected(name)}
            >
              ${emoji}
            </span>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "emoji-picker": EmojiPicker;
  }
}
