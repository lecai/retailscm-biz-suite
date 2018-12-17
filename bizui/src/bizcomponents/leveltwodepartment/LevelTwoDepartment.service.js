import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}levelTwoDepartmentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelTwoDepartmentManager/loadLevelTwoDepartment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBelongsTo = (ownerClass, id, filterKey, pageNo) => {
 
  const url = `${PREFIX}levelTwoDepartmentManager/requestCandidateBelongsTo/ownerClass/id/filterKey/pageNo/`
  const requestParameters = {id, ownerClass,filterKey, pageNo}
  return postForm({url,requestParameters})
}	

const transferToAnotherBelongsTo = (id, parameters) => {
  //const parametersExpr = joinParameters(parameters)
  const url = `${PREFIX}levelTwoDepartmentManager/transferToAnotherBelongsTo/id/anotherBelongsToId/`
  const requestParameters = {id, ...parameters}
  return postForm({url,requestParameters})
}







const addLevelThreeDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelTwoDepartmentManager/addLevelThreeDepartment/levelTwoDepartmentId/name/description/founded/tokensExpr/`
  const levelTwoDepartmentId = targetObjectId
  const requestParameters = { ...parameters, levelTwoDepartmentId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateLevelThreeDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelTwoDepartmentManager/updateLevelThreeDepartmentProperties/levelTwoDepartmentId/id/name/description/founded/tokensExpr/`
  const levelTwoDepartmentId = targetObjectId
  const requestParameters = { ...parameters, levelTwoDepartmentId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeLevelThreeDepartmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelTwoDepartmentManager/removeLevelThreeDepartmentList/levelTwoDepartmentId/levelThreeDepartmentIds/tokensExpr/`
  const requestParameters = { ...parameters, levelTwoDepartmentId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const LevelTwoDepartmentService = { view,
  load,
  addLevelThreeDepartment,
  updateLevelThreeDepartment,
  removeLevelThreeDepartmentList,
  requestCandidateBelongsTo,
  transferToAnotherBelongsTo }
export default LevelTwoDepartmentService
