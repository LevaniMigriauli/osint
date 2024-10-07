import { toast } from 'react-hot-toast'

export const showSuccessToast = (message) => {
  toast.success(message, {
    icon: '✅',
    style: {
      borderRadius: '8px',
      background: '#28a745',
      color: '#fff'
    }
  })
}

export const showWarningToast = (message) => {
  toast(message, {
    icon: '⚠️',
    style: {
      borderRadius: '8px',
      background: '#ffc107', // Warning yellow
      color: '#000'
    }
  })
}

export const showErrorToast = (message) => {
  toast.error(message, {
    icon: '❌',
    style: {
      borderRadius: '8px',
      background: '#dc3545',
      color: '#fff'
    }
  })
}
