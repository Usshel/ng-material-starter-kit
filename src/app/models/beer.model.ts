export interface BeerModel {
  readonly id: number;
  readonly name: string;
  readonly tagline: string;
  readonly firstBrewed: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly abv: number;
  readonly ibu: number;
}
