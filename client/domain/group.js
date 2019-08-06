export class Group {
    constructor({ order = 1, fields = [], descriptionEN, descriptionPT } = {
        order: 1,
        fields: [],
        descriptionEN: '',
        descriptionPT: ''
    }) {
        this.descriptionEN = descriptionEN;
        this.descriptionPT = descriptionPT;
        this.order = order
        this.fields = fields;
    }
}
