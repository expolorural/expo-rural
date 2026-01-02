export interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
  technique: string;
  date: string;
  location?: string;
  camera?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
  story: string;
  imageUrl: string;
  thumbnailUrl: string;
}