export class Category {
    constructor({ image, descriptionEN, descriptionPT, forms } = {}) {
        this.image = image || null;
        this.descriptionEN = descriptionEN || '';
        this.descriptionPT = descriptionPT || '';
        this.forms = forms || [];
    }
}
