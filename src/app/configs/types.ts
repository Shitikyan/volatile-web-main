export interface TechnologyStack {
  [key: string]: {
    description: String;
    technologies: TechnologyItem[];
  }
}

export interface TechnologyItem {
  name: String;
  icon: String;
}
