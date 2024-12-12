import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isRelativeLink(url) {
  try {
    const parsedUrl = new URL(url);

    // Абсолютная ссылка
    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'ftp:') {
      return false; // абсолютная ссылка
    }
  } catch (e) {
    // Ошибка говорит о том, что URL был невалидным, значит, это относительная ссылка
    return true; // относительная ссылка
  }

  return false; // в любом другом случае это абсолютная ссылка
}

export function goToLink(router, link) {
  if (isRelativeLink(link)) {
    router.push(link)
  } else {
    window.open(link, '_blank')
  }
}