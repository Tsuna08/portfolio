const DEFAULT_COLORS = [
  "#5B8CFF", // синий
  "#2EC4B6", // бирюзовый
  "#FFC94D", // жёлтый
  "#9B5DE5", // фиолетовый
  "#00BBF9", // голубой
] as const;

export type CardKey = string | number | undefined;
export type ColorAssigner = (key: CardKey) => string;

/**
 * Фабрика: возвращает функцию, которая выдаёт каждой уникальной
 * карточке свой цвет из палитры (повторные вызовы с тем же ключом
 * возвращают тот же цвет).
 */
export function createColorAssigner(
  palette: readonly string[] = DEFAULT_COLORS,
): ColorAssigner {
  const assigned = new Map<CardKey, string>();

  return (key: CardKey): string => {
    let color = assigned.get(key);
    if (color === undefined) {
      color = palette[assigned.size % palette.length];
      assigned.set(key, color);
    }
    return color;
  };
}

/** Готовая функция с дефолтной палитрой */
export const getColor: ColorAssigner = createColorAssigner();
