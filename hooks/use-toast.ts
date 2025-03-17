export function useToast() {
    const toast = (message: string) => {
      console.log(message)
    }
  
    return { toast }
  }