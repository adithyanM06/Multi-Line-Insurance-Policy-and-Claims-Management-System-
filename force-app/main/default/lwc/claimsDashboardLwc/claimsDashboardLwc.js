import { LightningElement, wire } from 'lwc';
import getAssignedClaims from '@salesforce/apex/ClaimsAdjusterController.getAssignedClaims';
import { NavigationMixin } from 'lightning/navigation';

export default class ClaimsDashboardLwc extends NavigationMixin(LightningElement) {
    claims;
    error;

    @wire(getAssignedClaims)
    wiredClaims({ error, data }) {
        if (data) {
            this.claims = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.claims = undefined;
        }
    }

    get errorMessage() {
        return this.error ? (this.error.body ? this.error.body.message : this.error.message) : '';
    }

    handleClaimSelect(event) {
        const claimId = event.detail;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: claimId,
                actionName: 'view'
            }
        });
    }
}