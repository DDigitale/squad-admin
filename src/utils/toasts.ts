import toast from 'react-hot-toast'

export const loadingToast = (text: string) => {
  toast.loading(text, {
    style: {
      position: 'relative',
    },
  })
}

export const successToast = (text: string) => {
  toast.success(text, {
    style: {
      position: 'relative',
    },
  })
}

export const errorToast = (text: string) => {
  toast.error(text, {
    style: {
      position: 'relative',
    },
  })
}
