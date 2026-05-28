import { colors } from "@/constant/colors";
export const getMainColors = () => ({
  primary: colors.primary.main, // #009966 - Hijau Zamrud
  dark: colors.dark.main, // #000000 - Hitam Pekat
  accent: colors.accent.gold, // #D4AF37 - Emas
});
export const colorClasses = {
  // Background colors - Hijau Zamrud (dari colors.primary)
  bg: {
    primary: "bg-[#009966]", // colors.primary.main - Emerald Green utama
    primaryDark: "bg-[#006644]", // colors.primary.dark - Dark emerald
    primaryLight: "bg-[#00CC88]", // colors.primary.light - Light emerald
    primaryLighter: "bg-[#E6F5F0]", // colors.primary.lighter - Very light emerald
    accent: "bg-[#D4AF37]", // colors.accent.gold - Gold accent
    accentLight: "bg-[#FFD700]", // colors.accent.goldLight - Bright gold
    silver: "bg-[#C0C0C0]", // colors.silver.main - Silver accent
    dark: "bg-[#000000]", // colors.dark.main - Jet Black
    white: "bg-white",
    light: "bg-[#F9FAFB]", // colors.background.light
  },

  // Text colors (dari colors.text dan colors.dark)
  text: {
    primary: "text-[#000000]", // colors.text.primary - Jet Black untuk text utama
    secondary: "text-[#1a1a1a]", // colors.text.secondary - Dark gray
    light: "text-[#4B5563]", // colors.text.light - Light gray
    white: "text-white",
    emerald: "text-[#009966]", // colors.text.emerald - Emerald green text
    gold: "text-[#D4AF37]", // colors.text.gold - Gold text
    silver: "text-[#C0C0C0]", // colors.silver.main - Silver text
  },

  // Border colors (dari colors.border)
  border: {
    default: "border-[#E5E7EB]", // colors.border.default
    emerald: "border-[#009966]", // colors.border.emerald - Emerald border
    gold: "border-[#D4AF37]", // colors.border.gold - Gold border
    silver: "border-[#C0C0C0]", // colors.silver.main - Silver border
    dark: "border-[#000000]", // colors.border.dark - Jet black border
  },

  // Hover colors
  hover: {
    primary: "hover:bg-[#006644]", // colors.primary.dark - Dark emerald on hover
    primaryLight: "hover:bg-[#00CC88]", // colors.primary.light - Light emerald on hover
    accent: "hover:bg-[#B8860B]", // colors.accent.goldDark - Dark gold on hover
    textEmerald: "hover:text-[#009966]", // colors.text.emerald - Emerald text on hover
    textGold: "hover:text-[#D4AF37]", // colors.text.gold - Gold text on hover
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
export const getColor = (path: keyof typeof colors) => {
  return colors[path];
};

/**
 * Export colors untuk penggunaan langsung
 */
export { colors };
