
export const userInfo = () => {
    const name = localStorage.getItem('name')
    const userId = localStorage.getItem('userId')
    const role = localStorage.getItem('role')
    
    return {name, userId, role};
}