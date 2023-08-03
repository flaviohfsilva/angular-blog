export interface Task {
  id: number;
  title: string;
  completo: boolean;
  date: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface StickyCard {
  id: number;
  title: string;
  content: string;
  color: string;
}
