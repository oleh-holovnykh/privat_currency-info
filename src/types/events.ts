export interface Event {
  id: number;
  type?: string;
  startDate: string;
  endDate: string;
}

export interface Retreat extends Event {
  description: string;
  title: string;
}

export interface Module extends Event {
  module: number;
  title: string;
}

export interface PracticeClass extends Event {
  class: number;
  subclass: number;
}
