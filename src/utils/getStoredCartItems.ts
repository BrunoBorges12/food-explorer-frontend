/* eslint-disable no-console */
export default function getStoredCartItems() {
    if (typeof window !== 'undefined') {
        const storedCartItems = localStorage.getItem('cartItems')
        if (storedCartItems !== null) {
            try {
                return JSON.parse(storedCartItems)
            } catch (error) {
                console.error(
                    'Failed to parse cart items from localStorage',
                    error,
                )
            }
        }
    }
    return []
}
