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
      bottom: 2px;
      border: 1px solid var(--color-border-primary);
      max-width: 264px;
      min-width: 192px;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24px, 1fr));
      gap: 12px;
      padding: 12px;
      border-radius: 4px;
    }
    .emoji {
      width: 24px;
      height: 24px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
    }
    .remove-button-styling {
      background-color: #ffffff;
      padding: 0;
      border: unset;
      outline: unset;
    }
    .emoji:hover,.emoji:focus {
      outline: 1px solid var(--color-border-primary);
      background-color: var(--color-blue-100);
    }
  `;

  render() {
    return html`
      <div class="emoji-grid">
        ${this.emojiList.map(
          ([name, emoji]) => html`
            <button
              class="emoji remove-button-styling"
              title="${name}"
              @click=${() => this._onEmojiSelected(name)}
            >
              ${emoji}
            </button>
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
