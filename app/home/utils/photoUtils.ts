export interface DishDetail {
  quantity?: string;
  price?: number;
}

export const fetchAvailablePhotos = async (): Promise<string[]> => {
  try {
    const response = await fetch("/api/photos");
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }
    const data = await response.json();
    return data.photos as string[];
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};

export const findAvailablePhotos = (
  code: string,
  allPhotos: string[]
): string[] => {
  const regex = new RegExp(`^${code}(\\.\\d+)?\\.jpe?g$`, "i"); // e.g., /^A1(\.\d+)?\.jpe?g$/i
  return allPhotos.filter((photoName) => regex.test(photoName));
};
