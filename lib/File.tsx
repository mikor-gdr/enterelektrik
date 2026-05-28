export { colors, tailwindColors } from "./Warna";

// Path logo
export const LOGO_PATH = "/logo.webp";

// Path background image
export const BG_IMAGE_PATH = "/bg.jpg";

// Path foto pondok pesantren
export const PONDOK_PHOTO_PATH = "/ganti_gambar.jpg";

// Informasi yayasan
export const YAYASAN_INFO = {
  name: "ENTERELEKTRIK",
  shortName: "ENTERCEL",
  location: "Purwosari Pasuruan Jawa Timur",
  fullName:
    "Distributor Pulsa Pasuruan Jawa Timur",
  founded: 1998,
  leader: "gndruongalah",
} as const;

// Alias untuk backward compatibility
export const PONDOK_INFO = YAYASAN_INFO;
