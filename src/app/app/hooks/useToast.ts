import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function useToast() {
  const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  const showToast = (message: string, options?: ToastOptions) => {
    toast(message, { ...defaultOptions, ...options })
  }

  return { showToast }
}
