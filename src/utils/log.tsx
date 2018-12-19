export namespace LogUtil {
  export enum LogLevel {
    debug,
    info,
    warning,
  }
  const logLevel2bgColor = (loglevel: LogLevel): string => {
    const bgWhite = '\x1b[47m';
    const bgYellow = '\x1b[43m';
    const bgMagenta = '\x1b[45m';

    switch(loglevel) {
      case LogLevel.debug:
        return bgWhite;
      case LogLevel.info:
        return bgYellow
      case LogLevel.warning:
        return bgMagenta;
    }
  }
  export const decorateOutputLog = (log: string, logLevel: LogLevel = LogLevel.debug): void => {
    const bl = '\x1b[30m';
    const reset = '\x1b[0m'
    console.log(`${logLevel2bgColor(logLevel)}${bl} ${log} ${reset}`);
  }
}