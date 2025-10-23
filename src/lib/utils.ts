import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Open a file in a new tab for preview and optionally trigger a download prompt.
 * Keeps behavior consistent across components.
 */
export function previewThenDownload(filePath: string, filename?: string) {
  const previewWin = window.open(encodeURI(filePath), "_blank", "noopener,noreferrer");

  if (!previewWin) {
    const fallback = window.confirm(
      "Unable to open preview in a new tab (popups may be blocked). Open resume in current tab and download?"
    );
    if (fallback) {
      window.location.href = encodeURI(filePath);
    }
    return;
  }

  const downloadNow = window.confirm("Preview opened in a new tab. Would you like to download/save the resume now?");
  if (downloadNow) {
    try {
      const link = document.createElement("a");
      link.href = encodeURI(filePath);
      if (filename) link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      // ignore — preview already opened for manual download
    }
  }
}
