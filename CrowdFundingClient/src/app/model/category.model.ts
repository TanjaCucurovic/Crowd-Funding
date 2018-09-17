export class Category implements CategoryInterface {
    public name: string;

    constructor(categoryCfg: CategoryInterface) {
        this.name = categoryCfg.name;
    }
}

interface CategoryInterface {
    name: string;
}