export class API {
  static bad: number;

  // The knows API is defined in the parent class Relation.
  static isBadVersion(version: number): boolean {
    console.log(API.bad);
    return version >= API.bad;
  }
}
