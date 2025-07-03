export const saveAccessTokenToLS = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken)
}

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem('access_Token')
}

export const getAccessTokenFromLS = () => localStorage.getItem('accessToken') || ''