export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
  ADMIN_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID as string,
  USER_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID as string,
  ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL as string,
};
