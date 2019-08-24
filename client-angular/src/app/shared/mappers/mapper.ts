export class Mapper<T> {
  fromSource(model: any): any {
    return model;
  }

  toSource(model: T): T {
    return model;
  }

  fromSourceList(models: any[]): T[] {
    return models.map(this.fromSource.bind(this));
  }

  toSourceList(models: T[]): any {
    return models.map(this.toSource.bind(this));
  }
}
