const linksSocialMedia = {
  github: 'marceloaaguilar',
  youtube: 'camikaze13',
  facebook: 'marcelo.dalmeida96',
  twitter: 'omarcelo13',
  instagram: 'm5marcelo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubUserInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href.textContent = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubUserInfo()
