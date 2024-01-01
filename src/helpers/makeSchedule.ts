import { Module, PracticeClass, Retreat } from "../types/events";

export const makeSchedule = (modules: Module[], retreats: Retreat[] , practices: PracticeClass[]) => {
  const allGroups = [...modules, ...retreats, ...practices];
  const currentDate = new Date();
  const filteredGroups = allGroups.filter(group => {
    const startDate = new Date(group.startDate);

    return startDate >= currentDate;
  })
  const sortedGroups = filteredGroups.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);

    return dateA.getTime()-dateB.getTime();
  })

  return sortedGroups;
}