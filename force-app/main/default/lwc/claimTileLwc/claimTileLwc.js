import { LightningElement, api } from 'lwc';

export default class ClaimTileLwc extends LightningElement {
    @api claim;

    handleSelect() {
        const selectEvent = new CustomEvent('claimselect', {
            detail: this.claim.Id
        });
        this.dispatchEvent(selectEvent);
    }
}