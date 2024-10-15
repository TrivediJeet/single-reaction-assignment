import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ReactionsMap } from "..";
import "./picker-svg";
import { formatCount } from "../utils/numberFormatters";

@customElement("reaction-pills")
export class ReactionPills extends LitElement {
  @property({ attribute: false })
  reactions: ReactionsMap = {} as any;

  private _onTogglePicker() {
    this.dispatchEvent(
      new CustomEvent("toggle-picker", {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _onReactionSelected(name: string) {
    this.dispatchEvent(
      new CustomEvent("reaction-selected", {
        detail: { name },
        bubbles: true,
        composed: true,
      })
    );
  }

  static styles = css`
    .container {
      margin-top: 50vh;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      background-color: #ffffff;
      border-radius: 4px;
      border: 1px solid var(--color-border-primary);
      padding: 16px;
      font-size: 12px;
    }

    .emoji-pill {
      user-select: none;
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      gap: 4px;
      justify-content: center;
      padding: 8px 12px;
      border: 1px solid var(--color-border-primary);
      border-radius: 80px;
      background-color: var(--color-background-secondary);
      color: var(--color-text-primary);
    }
    .emoji-pill.picker {
      grid-template-columns: auto;
    }
    picker-svg {
      --svg-color: black;
    }
    .picker:hover picker-svg {
      --svg-color: #027baf;
    }
    .picker:focus picker-svg {
      --svg-color: #027baf;
    }
    .emoji-pill:active {
      background-color: var(--color-blue-050);
      border-color: var(--color-blue-700);
      color: var(--color-blue-700);
    }
    .emoji-pill:hover, .emoji-pill:focus {
      background-color: #ffffff;
      cursor: pointer;
      color: var(--color-blue-700);
      border: 1px solid var(--color-blue-700);
      outline: none;
    }
  `;

  render() {
    return html`
      <div class="container">
        <button class="emoji-pill picker" @click=${this._onTogglePicker}>
          <picker-svg></picker-svg>
        </button>
        ${Array.from(this.reactions.entries()).map(
          ([name, reaction]) =>
            html`
              <button
                title=${reaction.count + name}
                class="emoji-pill"
                @click=${() => this._onReactionSelected(name)}
              >
                <span class="emoji"> ${reaction.unicode} </span>
                <span class="count"> ${formatCount(reaction.count)} </span>
              </button>
            `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "reaction-pills": ReactionPills;
  }
}
