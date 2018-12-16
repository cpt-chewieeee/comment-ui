const findSecondLevelComments = (firstLevel, comments) => {
  for(let index in comments) {
    if(firstLevel.hasOwnProperty(comments[index].refComment)) {
      firstLevel[comments[index].refComment].children.push({
        ...comments[index],
        children: []
      })
    }
  }
  return Promise.resolve(firstLevel)
}
const getParents = (currentIndex, comments) => {

  const parents = []
  let refId = comments[currentIndex].refComment
  while(refId !== null) {
    parents.push(refId)
    const next = comments.find(item => {
      return item.id === refId
    })
    refId = next.refComment
  }
  return parents
}
const findThirdLevelComments = (firstLevel, comments) => {

  for(let index in comments) {
    if(comments[index].refComment !== null && !firstLevel.hasOwnProperty(comments[index].refComment)) {

      /* at third level, there should always be two parents */
      const parents = getParents(index, comments)
      firstLevel[parents[1]].children = firstLevel[parents[1]].children.map(item => {
        if(item.id === parents[0]) {
          item.children.push(comments[index])
        }
        return item
      })
    }
  }
}

export const parseComments = (comments) => {
  const firstLevel = comments.filter(item => {
    if(item.refComment === null) {
      return item
    }
    return false
  }).reduce((obj, item) => {
    return {
      ...obj,
      [item.id]: {
        ...item,
        children: []
      }
    }
  }, {})

  return findSecondLevelComments(firstLevel, comments).then(() => {
    findThirdLevelComments(firstLevel, comments)
    return firstLevel
  })
  


  // return firstLevel
}