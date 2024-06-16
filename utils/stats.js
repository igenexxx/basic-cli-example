const title = 'Github followers'

const getFollowers = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()

  return data.followers
}

export const showFollowers = async (username) => {
  const followers = await getFollowers(username)
  console.log(`${title}: ${followers}`)
}
