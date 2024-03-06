export type InlineAction = {
  name: string;
  title?: string;
  icon: React.ReactNode;
  onSelect: (name: string) => void;
  selected: boolean;
};
