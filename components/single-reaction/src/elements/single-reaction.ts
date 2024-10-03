import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import "./emoji-picker";
import "./reaction-pills";
import { reactions, ReactionsMap } from "..";

@customElement("single-reaction")
export class SingleReaction extends LitElement {
  @property({ attribute: false })
  reactions: ReactionsMap = this._initializeReactions();

  @state()
  private _showEmojiPicker = false;

  // TODO: Elegant approach to consolidate with data returned from server
  private _initializeReactions(): ReactionsMap {
    return reactions;
  }

  private _togglePicker(): void {
    this._showEmojiPicker = !this._showEmojiPicker;
  }

  static styles = css`
    .container {
      display: inline-block;
    }
  `;

  render() {
    const filteredReactions: ReactionsMap = new Map(
      Array.from(this.reactions.entries()).filter(
        ([_, reaction]) => reaction.count > 0
      )
    );

    return html`
        ${when(
          this._showEmojiPicker,
          () => html`
            <emoji-picker
              @emoji-selected=${this._onEmojiSelected}
            ></emoji-picker>
          `
        )}

        <reaction-pills
          .reactions=${filteredReactions}
          @toggle-picker=${this._togglePicker}
          @reaction-selected=${this._onReactionSelected}
        ></reaction-pills>
    `;
  }

  private _onEmojiSelected(event: CustomEvent<{ name: string }>) {
    const { name } = event.detail;
    this._updateReactionCount(name);
    this._togglePicker();
  }

  private _onReactionSelected(event: CustomEvent<{ name: string }>) {
    const { name } = event.detail;
    this._updateReactionCount(name);
  }

  private _updateReactionCount(name: string) {
    this.reactions = new Map(this.reactions);

    const mapEntry = this.reactions.get(name);
    if (mapEntry) {
      const newCount = mapEntry.reacted
        ? mapEntry.count - 1
        : mapEntry.count + 1;
      this.reactions.set(name, {
        ...mapEntry,
        count: newCount,
        reacted: !mapEntry.reacted,
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "single-reaction": SingleReaction;
  }
}
