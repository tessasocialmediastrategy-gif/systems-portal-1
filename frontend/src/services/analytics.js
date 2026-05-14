const API_URL = process.env.REACT_APP_BACKEND_URL;
const SESSION_KEY = 'opas_session_id';

const getSessionId = () => {
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
};

/**
 * Fire-and-forget analytics event. Never blocks the UI or throws.
 * Backend whitelist: landing_view, video_showcase_impression, architectural_map_zoom,
 *                    priority_access_open, priority_access_submit, heritage_view, trust_teaser_click
 */
export const track = (event, metadata = {}) => {
  if (!API_URL) return;
  try {
    const payload = {
      event,
      path: typeof window !== 'undefined' ? window.location.pathname : null,
      referrer: typeof document !== 'undefined' ? document.referrer || null : null,
      session_id: getSessionId(),
      metadata
    };
    // Use sendBeacon when available so it survives page unloads
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon(`${API_URL}/api/analytics/event`, blob);
      return;
    }
    fetch(`${API_URL}/api/analytics/event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {});
  } catch {
    /* analytics must never crash the app */
  }
};
