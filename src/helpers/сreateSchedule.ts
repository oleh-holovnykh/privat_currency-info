import { PracticeClass, Retreat, Module } from '../types/events';

export const createSchedule = (
  modules: Module[],
  practices: PracticeClass[],
  retreats: Retreat[]
) => {
  let schedule = [...modules, ...practices, ...retreats];
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 3)

  schedule = schedule.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);

    return dateA.getTime() - dateB.getTime();
  });

  schedule = schedule.filter(group => {
    const startDate = new Date(group.startDate);

    return startDate >= currentDate;
  })

  schedule = schedule.filter(group => {
    return ('title' in group) || (group!.subclass === 2)
  })

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
