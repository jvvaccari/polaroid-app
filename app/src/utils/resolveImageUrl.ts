export function resolveImageUrl(url: string): string {
  const uploadsIndex = url.indexOf("/uploads/");
  if (uploadsIndex !== -1) {
    return "/api" + url.substring(uploadsIndex);
  }
  return url;
}

export default resolveImageUrl;