import { environment } from "@/constants/constant";

export function ListOrder<T extends Record<string, any>>(data: T[]): (T & { _id: string })[] {
  return data.map((item, index) => ({
    ...item,
    _id: (index + 1).toString(),
  }));
}

export function backOneStep() {
  window.history.back();
}

export function reloadPage() {
  window.location.reload()
}