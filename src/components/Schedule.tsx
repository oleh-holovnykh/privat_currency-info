import React from "react";
import { Module, PracticeClass, Retreat } from "../types/events";
import { makeSchedule } from "../helpers/makeSchedule";

interface Props {
  modules: Module[];
  practices: PracticeClass[];
  retreats: Retreat[];
}

export const Schedule: React.FC<Props> = ({ modules, practices, retreats }) => {
  const groups = makeSchedule(modules, retreats, practices);
  
  return <div>
    {groups.map((module) => module.startDate)}  
  </div>;
};
