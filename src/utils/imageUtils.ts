/// <reference types="vite/client" />
import React from 'react';

/**
 * Deployment-safe Image Utility
 * Ensures image URLs resolve correctly across local dev, Vite preview,
 * Vercel, Netlify, and subpath deployments (e.g. GitHub Pages).
 */

// Default fallback image if any asset fails to load
export const DEFAULT_FALLBACK_IMAGE = '/images/delaqua_boutique_facade_1786532043184.jpg';

/**
 * Resolves a given image path to be deployment-compatible with Vite base paths.
 */
export function getImageUrl(path: string | undefined): string {
  if (!path) return getImageUrl(DEFAULT_FALLBACK_IMAGE);
  
  // If it's already an absolute HTTP/HTTPS URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Strip leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Retrieve Vite BASE_URL (e.g., '/' or '/subpath/')
  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBase}${cleanPath}`;
}

/**
 * Image error handler to prevent broken image icons (404) on production deployments.
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackPath: string = DEFAULT_FALLBACK_IMAGE
) {
  const target = event.currentTarget;
  // Prevent infinite error loops if fallback also fails
  if (target.dataset.failed) return;
  target.dataset.failed = 'true';
  target.src = getImageUrl(fallbackPath);
}
