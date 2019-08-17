export class Mapper<T> {
  fromSource(model: any): any {
    return model;
  }

  toSource(model: T): T {
    return model;
  }

  fromSourceList(models: T[]) {
    return models.map(this.fromSource);
  }

  toSourceList(models: any[]) {
    return models.map(this.toSource);
  }

}
