export class Formatter {

    public static truncateTextWithEllipsis(text: string, truncateSize: number): string {
        return text.length > truncateSize ? `${text.substr(0, truncateSize).trim()}...` : text;
    }
}
