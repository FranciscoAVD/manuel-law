"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  addBusinessDays,
  format,
  startOfToday,
  addDays,
  isWeekend,
} from "date-fns";
import { CalendarDaysIcon } from "lucide-react";
import Image from "next/image";
import stock from "@p/images/stock.jpg";
import bg from "@p/images/contact-bg.jpg";
import { Textarea } from "@/components/ui/textarea";
import { formatPhoneNumber } from "@/lib/utils";
import { toast } from "sonner";
import Link from "next/link";

function validDate(): Date {
  let valid = addDays(startOfToday(), 1);

  while (isWeekend(valid)) {
    valid = addDays(valid, 1);
  }
  return valid;
}
function Contact({
  content,
}: {
  content: {
    title: string;
    switch: {
      label: string;
      href: string;
    };
    form: {
      name: string;
      consultationMethod: {
        label: string;
        options: {
          phone: string;
          video: string;
        };
      };
      preferredLanguage: {
        label: string;
        options: {
          en: string;
          es: string;
        };
      };
      phone: string;
      email: string;
      date: string;
      time: {
        label: string;
        options: {
          morning: string;
          afternoon: string;
          evening: string;
        };
      };
      florida: {
        label: string;
        options: {
          yes: string;
          no: string;
          unsure: string;
        };
      };
      details: string;
      pricing: string;
      button: string;
    };
  };
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const today = startOfToday();
  const [date, setDate] = useState<Date>(validDate());
  //User can schedule no further than 2 weeks from today
  const disabled = addBusinessDays(today, 14);

  return (
    <section id="contact" className="grid lg:grid-cols-2 h-fit">
      <div className="py-20 px-10 bg-neutral-100 border-y">
        <h2 className="text-[36px] text-center">{content.title}</h2>
        <Link
          href={content.switch.href}
          className="block text-center text-sm underline w-fit mx-auto"
        >
          &#40;{content.switch.label}&#41;
        </Link>
        <form method="POST" className="mt-6 flex flex-col gap-y-4">
          <div>
            <Label htmlFor="name" className="sr-only">
              {content.form.name}
            </Label>
            <Input
              name="name"
              placeholder={content.form.name}
              className="rounded-md px-3 py-1 border bg-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="method" className="sr-only">
              {content.form.consultationMethod.label}
            </Label>
            <Select name="method">
              <SelectTrigger className="w-full bg-white">
                <SelectValue
                  placeholder={content.form.consultationMethod.label}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="call">
                  {content.form.consultationMethod.options.phone}
                </SelectItem>
                <SelectItem value="video">
                  {content.form.consultationMethod.options.video}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="language" className="sr-only">
              {content.form.preferredLanguage.label}
            </Label>
            <Select name="language">
              <SelectTrigger className="w-full bg-white">
                <SelectValue
                  placeholder={content.form.preferredLanguage.label}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">
                  {content.form.preferredLanguage.options.en}
                </SelectItem>
                <SelectItem value="es">
                  {content.form.preferredLanguage.options.es}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="sr-only">
                {content.form.phone}
              </Label>
              <Input
                name="phone"
                value={phone}
                className="bg-white"
                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                placeholder={content.form.phone}
              />
            </div>
            <div>
              <Label htmlFor="email" className="sr-only">
                {content.form.email}
              </Label>
              <Input
                name="email"
                type="email"
                className="bg-white"
                placeholder={content.form.email}
                required
              />
            </div>
          </div>
          {/*date and time */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-md pr-3 bg-white">
              <Label htmlFor="date" className="sr-only">
                {content.form.date}
              </Label>
              <Popover>
                <PopoverTrigger
                  className="text-left text-muted-foreground"
                  asChild
                >
                  <div className="flex items-center">
                    <Input
                      name="date"
                      value={date ? format(date, "MM-dd-yyyy") : ""}
                      placeholder={content.form.date}
                      className="border-none cursor-default"
                      readOnly
                    />
                    <CalendarDaysIcon
                      className="size-4 text-black"
                      aria-hidden
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent align="start" className="p-0">
                  <Calendar
                    selected={date}
                    setSelected={setDate}
                    disableAfter={disabled}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="">
              <Label htmlFor="time" className="sr-only">
                {content.form.time.label}
              </Label>
              <Select name="time">
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder={content.form.time.label} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">
                    {content.form.time.options.morning}
                  </SelectItem>
                  <SelectItem value="afternoon">
                    {content.form.time.options.afternoon}
                  </SelectItem>
                  <SelectItem value="evening">
                    {content.form.time.options.evening}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="florida" className="sr-only">
              {content.form.florida.label}
            </Label>
            <Select name="florida">
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder={content.form.florida.label} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">
                  {content.form.florida.options.yes}
                </SelectItem>
                <SelectItem value="no">
                  {content.form.florida.options.no}
                </SelectItem>
                <SelectItem value="unsure">
                  {content.form.florida.options.unsure}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="situation" className="sr-only">
              {content.form.details}
            </Label>
            <Textarea
              name="description"
              className="bg-white"
              placeholder={content.form.details}
              minLength={40}
              required
            />
          </div>
          <p className="text-xs text-center text-muted-foreground">
            {content.form.pricing}
          </p>
          <Button type="submit" className="uppercase">
            {isLoading ? (
              <div className="size-5 rounded-full border-2 border-neutral-100 border-t-neutral-500 animate-spin" />
            ) : (
              <>{content.form.button}</>
            )}
          </Button>
        </form>
      </div>
      <div className="hidden lg:block max-h-screen">
        <Image src={bg} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

export { Contact };
