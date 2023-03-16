export const actionsLocalizer = (action: any) => {
  switch (action) {
    case 'AddPlayerNote':
      action = 'Добавил заметку'
      break
    case 'DeletePlayerNote':
      action = 'Удалил заметку'
      break
    case 'WarnPlayer':
      action = 'Отправил сообщение'
      break
    case 'Unban':
      action = 'Разбанил'
      break
    case 'BanPlayer':
      action = 'Забанил'
      break
    case 'RemovePlayerFromControl':
      action = 'Убрал с контроля'
      break
    case 'AddPlayerOnControl':
      action = 'Поставил на контроль'
      break
    case 'KickPlayer':
      action = 'Кикнул'
      break
    case 'DisbandSquad':
      action = 'Расформировал отряд'
      break
    case 'PlayerTeamChange':
      action = 'Сменил команду'
      break
    case 'WarnSquad':
      action = 'Сообщение отряду'
      break
    case 'ChangeCurrentLayer':
      action = 'Сменил текущую карту'
      break
    case 'ChangeNextLayer':
      action = 'Сменил следующую карту'
      break
    case 'SendBroadcast':
      action = 'Отправил broadcast'
      break
    case 'AddNewPlayer':
      action = 'Добавил игрока'
      break
    case 'AddAdmin':
      action = 'Добавил админа'
      break
    case 'DeactivateAdmin':
      action = 'Деактивировал админа'
      break
    case 'RemovePlayerFromSquad':
      action = 'Выгнал из отряда'
      break
    case 'EnteredInAdminCam':
      action = 'Зашел в камеру'
      break
    case 'LeftFromAdminCam':
      action = 'Вышел из камеры'
      break
    default:
      action = action
      break
  }
  return action
}
