export class Tickets {
    ticketsData:[];

    constructor(
        private destination: string,
        private price: Number,
        private status: string,
    ) { }
}
