import "./single-reaction";
import { EmojiPicker } from './emoji-picker';
import { page } from '@vitest/browser/context';
import { ReactionPills } from './reaction-pills';
import { SingleReaction } from './single-reaction';
import { describe, it, expect, beforeEach } from 'vitest';

describe("single reaction component", async () => {
    let containerElement: SingleReaction;
    let emojiPicker: EmojiPicker;
    let reactionPills: ReactionPills;

    beforeEach(async () => {
        document.body.innerHTML = '<single-reaction></single-reaction>';
        await page.getByRole('button').click();

        containerElement = document.querySelector('single-reaction')!;
        emojiPicker = containerElement.shadowRoot!.querySelector('emoji-picker')!;
        reactionPills = containerElement.shadowRoot!.querySelector('reaction-pills')!;
    });

    it("should render reaction-pills", () => {
        expect(reactionPills).toBeInTheDocument();
    });

    it("should render emoji picker component", () => {
        expect(emojiPicker).toBeInTheDocument();
    });

    it("should add emoji to reaction-pills and dismiss emoji picker on selection", async () => {
        const reactionPillsShadowRoot = reactionPills.shadowRoot!
        const reactionPillsList = reactionPillsShadowRoot.firstElementChild!;
        
        expect(reactionPillsList).toHaveClass("container");
        expect(reactionPillsList.childElementCount).toBe(1);

        await page.getByTitle('Love').click();

        expect(emojiPicker).not.toBeInTheDocument();
        expect(reactionPillsList.childElementCount).toBe(2);
    });
})