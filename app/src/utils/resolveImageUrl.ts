export function resolveImageUrl(url: string): string {
  if (import.meta.env.DEV) {
    const uploadsIndex = url.indexOf("/uploads/");
    if (uploadsIndex !== -1) {
      return "/api-uploads" + url.substring(uploadsIndex + "/uploads".length);
    }
  }
  return url;
}

export default resolveImageUrl;