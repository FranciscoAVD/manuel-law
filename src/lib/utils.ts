import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param input A string of any kind.
 * @returns A string that only includes digits.
 */
function cleanPhoneNumber(input: string): string {
  return input.replace(/\D/g, "");
}

/**
 *
 * @param input A string of any kind.
 * @returns A phone number in the format (999) 999 - 9999.
 */
function formatPhoneNumber(input: string): string {
  const digits = cleanPhoneNumber(input);

  let formatted = "";

  if (digits.length > 0) {
    formatted += `${digits.slice(0, 3)}`;
  }
  if (digits.length >= 4) {
    formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}`;
  }
  if (digits.length >= 7) {
    formatted += ` - ${digits.slice(6, 10)}`;
  }

  return formatted;
}

function isValidPhoneNumber(input: string): boolean {
  const cleaned = cleanPhoneNumber(input);

  return Number.isInteger(+cleaned) && cleaned.length === 10;
}

export { cn, formatPhoneNumber, isValidPhoneNumber };
