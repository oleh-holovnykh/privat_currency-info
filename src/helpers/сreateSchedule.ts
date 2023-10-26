import { PracticeClass, Retreat, Module } from '../types/events';

export const createSchedule = (
  modules: Module[],
  classes: PracticeClass[],
  retreats: Retreat[]
) => {
  let schedule = [...modules, ...classes, ...retreats];

  schedule = schedule.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);

    return dateA.getTime() - dateB.getTime();
  });

  schedule = schedule.map((event, id) => {
    event.id = id;

    return event;
  });

  schedule = schedule.map((event) => {
    if ('class' in event) {
      return { ...event, type: 'class' };
    }

    if ('module' in event) {
      return { ...event, type: 'module' };
    }

    return { ...event, type: 'retreat' };
  });

  return schedule;
};
