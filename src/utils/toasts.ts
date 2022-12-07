import toast from 'react-hot-toast'
import { MdRssFeed } from 'react-icons/md'

export const loadingToast = (text: string) => {
  toast.loading(text, {
    style: {
      position: 'relative',
      top: '3rem',
    },
  })
}

export const successToast = (text: string) => {
  toast.success(text, {
    style: {
      position: 'relative',
      top: '3rem',
    },
  })
}

export const errorToast = (text: string) => {
  toast.error(text, {
    style: {
      position: 'relative',
      top: '3rem',
    },
  })
}
