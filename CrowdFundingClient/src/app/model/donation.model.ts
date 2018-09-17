//import { Subject } from './subject.model';

export class Donation implements DonationInterface {
    //public type: DonationType;
    public amount: number;

    constructor(donationCfg: DonationInterface) {
       // this.type = donationCfg.type;
        this.amount = donationCfg.amount;
    }
}

interface DonationInterface {
    //type: DonationType;
    amount: number;
}