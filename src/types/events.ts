export interface Event {
  id: number;
  type?: string;
  startDate: string;
  endDate: string;
}

export interface Retreat extends Event {
  title: string;
  description: string;
}

export interface Module extends Event {
  module: number;
}

export interface PracticeClass extends Event {
  class: number;
  subclass: number;
}
