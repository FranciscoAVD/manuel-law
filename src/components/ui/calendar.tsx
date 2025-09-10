import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isEqual,
  isWeekend,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";
import React, { SetStateAction, useState } from "react";
import { Button } from "./button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const namesOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar({
  selected,
  setSelected,
  disableAfter,
}: {
  selected: Date;
  setSelected: React.Dispatch<SetStateAction<Date>>;
  disableAfter?: Date;
}) {
  const today = startOfToday();
  const [firstDayOfMonth, setFirstDayOfMonth] = useState<Date>(
    startOfMonth(today)
  );

  const daysOfTheMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  function handleOnClick(d: Date) {
    setSelected(d);
  }
  function previousMonth() {
    setFirstDayOfMonth(addMonths(firstDayOfMonth, -1));
  }
  function nextMonth() {
    setFirstDayOfMonth(addMonths(firstDayOfMonth, 1));
  }
  function isDisabled(d: Date) {
    if (isBefore(d, today) || isEqual(d, today)) return true;
    if (isWeekend(d)) return true;
    if (disableAfter) {
      if (isAfter(d, disableAfter)) return true;
    }
    return false;
  }
  return (
    <div className="p-4 text-sm rounded-md">
      <div className="flex items-center pl-2">
        <span>{format(firstDayOfMonth, "MMMM yyyy")}</span>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="ml-auto rounded-md"
          onClick={previousMonth}
        >
          <ChevronLeftIcon aria-hidden />
          <span className="sr-only">Previous month</span>
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="rounded-md"
          onClick={nextMonth}
        >
          <ChevronRightIcon aria-hidden />
          <span className="sr-only">Next month</span>
        </Button>
      </div>
      <div className="grid grid-cols-7 mb-4 text-xs text-center">
        {namesOfTheWeek.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <div role="grid" className="grid grid-cols-7 gap-1 text-xs">
        {daysOfTheMonth.map((d) => {
          const formatted = format(d, "yyyy-MM-dd");
          return (
            <button
              key={d.toDateString()}
              className={cn(
                "aspect-square rounded-full hover:bg-neutral-200 cursor-pointer disabled:cursor-default disabled:hover:bg-transparent disabled:text-neutral-400 transition-colors",
                isEqual(d, today) && "disabled:text-yellow-700",
                isEqual(selected, d) &&
                  "bg-yellow-600 hover:bg-yellow-600/90 text-white"
              )}
              disabled={isDisabled(d)}
              onClick={() => handleOnClick(d)}
            >
              <time dateTime={formatted}>{format(d, "d")}</time>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { Calendar };
