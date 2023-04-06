import { app } from '@/main';
import type { ToastProps } from 'vue-toast-notification';

const defaultProperties = {
  position: 'top'
} as ToastProps

export function toastSuccess(msg:string, properties=defaultProperties) {
  app.config.globalProperties.$toast.success(msg, properties);
}

export function toastError(msg:string, properties=defaultProperties) {
  app.config.globalProperties.$toast.error(msg, properties);
}

export function toastInfo(msg:string, properties=defaultProperties) {
  app.config.globalProperties.$toast.info(msg, properties);
}

export function toastWarn(msg:string, properties=defaultProperties) {
  app.config.globalProperties.$toast.warning(msg, properties);
}