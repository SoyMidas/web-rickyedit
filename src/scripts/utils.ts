export default function PrettierTime(seconds: number) {
  switch (true) {
    case seconds == 1:
      return seconds + " segundo";
    case seconds < 60:
      return seconds + " segundos";
    case seconds == 60:
      return Math.floor(seconds / 60) + " minuto";
    case seconds < 3600:
      return Math.floor(seconds / 60) + " minutos";
    case seconds == 3600:
      return Math.floor(seconds / 3600) + " hora";
    case seconds < 86400:
      return Math.floor(seconds / 3600) + " horas";
    case seconds == 86400:
      return Math.floor(seconds / 86400) + " día";
    case seconds > 86400:
      return Math.floor(seconds / 86400) + " días";
  }
}

