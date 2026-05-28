/**
 * Warna utama Pondok Pesantren Darut Taqwa IV
 * Skema warna: Hijau Zamrud, Hitam Pekat, dengan aksen Emas/Perak
 */

export const colors = {
  // Warna utama - Hijau Zamrud (Emerald Green)
  primary: {
    main: '#009966', // Emerald Green utama
    dark: '#006644', // Dark emerald untuk hover
    light: '#00CC88', // Light emerald
    lighter: '#E6F5F0', // Very light emerald untuk background
  },
  
  // Warna kontras - Hitam Pekat (Jet Black)
  dark: {
    main: '#000000', // Jet Black
    secondary: '#0A0A0A', // Slightly lighter black
    text: '#1a1a1a', // Dark gray untuk text
  },
  
  // Warna aksen - Emas (Gold) untuk kemewahan klasik
  accent: {
    gold: '#D4AF37', // Classic gold
    goldLight: '#FFD700', // Bright gold
    goldDark: '#B8860B', // Dark gold
  },
  
  // Warna aksen alternatif - Perak (Silver) untuk sentuhan modern
  silver: {
    main: '#C0C0C0', // Classic silver
    light: '#E8E8E8', // Light silver
    dark: '#808080', // Dark silver
  },
  
  // Warna netral
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  
  // Warna untuk background dan foreground
  background: {
    light: '#F9FAFB', // Light background
    default: '#FFFFFF', // White background
    emerald: '#009966', // Emerald green
    emeraldLight: '#E6F5F0', // Very light emerald
  },
  
  // Warna untuk text
  text: {
    primary: '#000000', // Jet Black untuk text utama
    secondary: '#1a1a1a', // Dark gray untuk text sekunder
    light: '#4B5563', // Light gray
    white: '#FFFFFF',
    emerald: '#009966', // Emerald green text
    gold: '#D4AF37', // Gold text
  },
  
  // Warna untuk border
  border: {
    default: '#E5E7EB',
    emerald: '#009966', // Emerald border
    gold: '#D4AF37', // Gold border
    dark: '#000000', // Jet black border
  },
} as const;

// Export untuk penggunaan di Tailwind CSS
export const tailwindColors = {
  primary: {
    emerald: colors.primary.main,
    emeraldDark: colors.primary.dark,
    emeraldLight: colors.primary.light,
    emeraldLighter: colors.primary.lighter,
  },
  accent: {
    gold: colors.accent.gold,
    goldLight: colors.accent.goldLight,
    goldDark: colors.accent.goldDark,
  },
  silver: {
    main: colors.silver.main,
    light: colors.silver.light,
    dark: colors.silver.dark,
  },
  dark: {
    main: colors.dark.main,
    secondary: colors.dark.secondary,
    text: colors.dark.text,
  },
} as const;

