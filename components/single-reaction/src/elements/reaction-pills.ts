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
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      background-color: #ffffff;
      border-radius: 4px;
      border: 1px solid #cccccc;
      padding: 16px;
      font-size: 12px;
    }
    .emoji-pill {
      user-select: none;
      display: grid;
      grid-template-columns: auto auto;
      align-items: end;
      gap: 4px;
      justify-content: center;
      padding: 8px 12px;
      border: 1px solid #cccccc;
      border-radius: 80px;
      background-color: #fafafa;
    }
    .emoji-pill.picker {
        gap: 0;
        grid-template-columns: auto;
    }
    .emoji-pill:active {
      background-color: #e9f7fc;
      border-color: #027baf;
      color: #027baf;
    }
    .emoji-pill:hover {
      color: red;
      background-color: #ffffff;
      cursor: pointer;
    }
    .emoji {
      display: inline-block;
    }
    .count {
      color: #484848;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="emoji-pill picker" @click=${this._onTogglePicker}>
          <picker-svg></picker-svg>
        </div>
        ${Array.from(this.reactions.entries()).map(
          ([name, reaction]) =>
            html`
              <div
                class="emoji-pill"
                @click=${() => this._onReactionSelected(name)}
              >
                <span class="emoji"> ${reaction.unicode} </span>
                <span class="count"> ${formatCount(reaction.count)} </span>
              </div>
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
