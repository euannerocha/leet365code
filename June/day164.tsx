function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const log = (msg: string) => console.log(`Logged: ${msg}`);

const debouncedLog = debounce(log, 1000);

debouncedLog("Hello");
debouncedLog("World");

setTimeout(() => debouncedLog("After delay"), 1500);