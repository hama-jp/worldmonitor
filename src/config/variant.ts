/**
 * Variant resolution — single source of truth.
 * 1. ?variant=tech|full in URL (preview / dev deployments)
 * 2. VITE_VARIANT build-time env (production)
 * 3. Default: 'full'
 */
function resolveVariant(): string {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const qv = params.get('variant');
    if (qv === 'tech' || qv === 'full') return qv;
  }
  return import.meta.env.VITE_VARIANT || 'full';
}

export const SITE_VARIANT = resolveVariant();
