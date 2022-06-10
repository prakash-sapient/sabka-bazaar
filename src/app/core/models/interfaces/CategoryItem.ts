export class CategoryItem {
  name = "";
  key = "";
  description = "";
  enabled = false;
  order = null;
  imageUrl = "";
  id = "";
  constructor(category: any) {
    if (category) {
      this.name = category.name;
      this.key = category.key;
      this.description = category.description;
      this.enabled = category.enabled;
      this.order = category.order;
      this.imageUrl = category.imageUrl;
      this.id = category.id;
    }
  }
}
