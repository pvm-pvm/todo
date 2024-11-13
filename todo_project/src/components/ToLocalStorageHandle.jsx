const todoLocKey = "todoKey"

export function getLocalStorageData(){
  const localData = localStorage.getItem(todoLocKey);
  if(!localData) return [];
  return JSON.parse(localData);
}

export function setLocalStorageData(tasksArr){
  localStorage.setItem(todoLocKey,JSON.stringify(tasksArr))
}