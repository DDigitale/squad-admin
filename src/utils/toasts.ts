import toast from 'react-hot-toast'
import { MdRssFeed } from 'react-icons/md'

export const loadingToast = (text: string) => {
  toast.loading(text, {})
}

export const successToast = (text: string) => {
  toast.success(text, {})
}

export const errorToast = (text: string) => {
  toast.error(text, {})
}